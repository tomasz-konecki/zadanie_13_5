var os = require('os'),
    time = require('./timeFormat'),
    colors = require('colors');

function getOSinfo() {
    var type = os.type(),
        release = os.release(),
        cpu = os.cpus()[0].model,
        uptime = os.uptime(),
        userInfo = os.userInfo();

    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    console.log('\nSystem:'.cyan, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.blue, cpu);
    console.log('Uptime [hh:mm:ss]:'.green, time.newTime(uptime));
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.magenta, userInfo.homedir,'\n');
}

exports.print = getOSinfo;