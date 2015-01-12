#!/usr/bin/perl

# Stop the dev app environment.
# Seth Darbyshire

use strict;
use warnings; 

my @redis_pids = get_pids_by_name("redis"); 
my @mongo_pids = get_pids_by_name("mongo");
my @node_pids = get_pids_by_name("node");

kill_processes(@redis_pids);
kill_processes(@mongo_pids);
kill_processes(@node_pids);

sub get_pids_by_name {
  my $process_name = shift;
  my @result = ();

  foreach my $pid (qx(pgrep ${process_name})) {
    if ($pid =~ m/(\d+)/) {
      push (@result, $1);
    }
  }

  return @result;
}

sub kill_processes {
  my $cmd = "kill ".join(" ", @_);
  print "${cmd}\n";
  return system($cmd);
}
