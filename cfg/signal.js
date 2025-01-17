// PURPOSE: verify that report on signal can be configured
// RUN: node --experimental-report signal.js
// CHECK: The report is generated upon the signal reception

// simulate --report-on-signal at runtime
process.report.reportOnSignal = true

// dummy sleep so that the program does not exit premature
setTimeout(()=>{}, 1000)

// inject a signal
process.kill(process.pid, 'SIGUSR2');
