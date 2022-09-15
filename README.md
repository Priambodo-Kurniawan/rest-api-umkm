# server-umkm

Untuk membuat model perintah di terminalnya adalah:
`npx sequelize-cli model:generate --name <NamaModel> --attributes <namaField>:<tipeData>`

setelah dijalankan:
`akan muncul di 2 file baru di folder migration & folder models`

edit migration dan modelnya disesuaikan dengan field dan tipe data sesuai ERD

setelah membuat data migration
lakukan di terminal: `npx sequelize-cli db:migrate`
