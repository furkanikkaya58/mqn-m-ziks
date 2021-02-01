const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message) => {

    const embed = new Discord.MessageEmbed()
    .setColor('#DDB372')
    .setAuthor('MQN MÜZİK', client.user.avatarURL()) 
      .setThumbnail(client.user.avatarURL())
      .setDescription('MQN MÜZİK'  ,'Yeni Yapılmış bir Discord Müzik botu.')
      .addField('Komut listesi:', '`+oynat`, `+kapat`, `+geç`, `+kuyruk`,`+kuyruğu-temizle`')
    .setFooter(``, client.user.avatarURL())
    .setTimestamp()
    message.channel.send(embed)

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'help',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};
