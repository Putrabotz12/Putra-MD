let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0838-5605-1043]
│ •  [0838-4060-0765]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
