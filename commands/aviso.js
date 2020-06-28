const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    await message.delete()
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${message.author}, você não possui permissão para executar esse comando.`).then(msg=> msg.delete(8000))
    
    let mensg = args.join(' ')
    if(!mensg) {
        message.channel.send(`${message.author}, digite uma mensagem para inserir.`)
    return undefined;
    }

        const embed = new Discord.MessageEmbed()
        .setAuthor(`Anunciar`)
        .setDescription(`${mensg}`)
        .setColor("#0000")
        .setTimestamp()
        .setFooter(`Publicado por: ${message.author.username}`, message.author.avatarURL)
        message.channel.send(embed)
}