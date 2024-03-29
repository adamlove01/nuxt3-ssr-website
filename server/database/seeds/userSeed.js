exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          name: 'admin',
          email: 'admin@admin.com',
          password:
            '$2a$10$DPxJX9kPR095ka0.uToyruKwOcjyyKy80/m065DC9bgr1lU738JJ6',
          image: 'img/users/default.png',
          role: 'admin',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Joel Barish',
          email: 'joelbarish@mydomain.com',
          password:
            '$2a$10$0UlO77GVzXTmF6mlX96HpuDdoQbj0oKzwELKGYN3TxLEYvzzkw4wi',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Clementine Kruczynski',
          email: 'clementinekruczynski@mydomain.com',
          password:
            '$2a$10$.kiT9d4OhQiWUBVoKWrA4.eoR0ROMYLv.iUJg27nwknHs2MlQtNAK',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Jason Bourne',
          email: 'jasonbourne@mydomain.com',
          password:
            '$2a$10$aQ00bXHZ.v7JGp4UmaByd.xKJpAud.8ElYSUxUcUn5p74a4YP1Uu6',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Marie St. Jacques',
          email: 'mariestjacques@mydomain.com',
          password:
            '$2a$10$U6u.pXf32VRhefqAVo98BuVoP5bjLfTLZJI2SgYwExUVz1uIIjdAu',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Dom Cobb',
          email: 'domcobb@mydomain.com',
          password:
            '$2a$10$9/G3J/bAEo646BEOd3GB2umAnvqLbXXJpO2wfpO2pJFxF.rK3xfL6',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Robert Michael Fischer',
          email: 'robertmichaelfischer@mydomain.com',
          password:
            '$2a$10$1r.AjCxq1K7MtVGqRaWE1uTaBmpNN3fpKnxulmyKdh/.vhdQVywIC',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Will Hunting',
          email: 'willhunting@mydomain.com',
          password:
            '$2a$10$ctLB2AMWa3nue1O8gvqzG.rfm/rtkg1GWclRyJ3u2WDMwewUYI8J.',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Skylar S',
          email: 'skylars@mydomain.com',
          password:
            '$2a$10$Zb.cU7ejxFVLD/h3nBvfhe3yBjoAnAGUB2GhXvE0EENZEHIrrNWGm',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Colter Stevens',
          email: 'colterstevens@mydomain.com',
          password:
            '$2a$10$Q5tkTYuZq4y02oFUnbkoaOxzQEepQQz3BhqIGVTVAlVfaGFzNiREi',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Christina Warren',
          email: 'christinawarren@mydomain.com',
          password:
            '$2a$10$llHVf7oPHA./3O3UxV3SeOfpuP535hpQn6CsClB8JqYx8FL0wEjga',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Rick Deckard',
          email: 'rickdeckard@gmail.com',
          password:
            '$2a$10$.EW.L2k9l.DTpYLypfn/L.ck3W/ulbSlHBEl3Et2lgvFp1OFKash6',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Rachael Tyrell',
          email: 'rachaeltyrell@mydomain.com',
          password:
            '$2a$10$LZQL6eF./E2XgAov9YBw/.sj2KxBMq9pLzYzB577/aXEMyCgibVKO',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'John Anderton',
          email: 'johnanderton@gmail.com',
          password:
            '$2a$10$CR7Wvy5A5L8FUf4pDbaPhu/YIzl9JFzl4CikP3i6qfDDm8bIAxmdG',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Agatha Lively',
          email: 'agathalively@mydomain.com',
          password:
            '$2a$10$rViDd8onGNvnXyb1kdGzJ.waAjI3ouaG2Ol4LnzeFbmvIiXZNe99q',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Lincoln Six Echo',
          email: 'lincolnsixecho@mydomain.com',
          password:
            '$2a$10$st80ohsL5uWmBQhDf//MG.o2V/9C5MenGAgjwtctliWbOhWQSi2aW',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Jordan Two Delta',
          email: 'jordantwodelta@mydomain.com',
          password:
            '$2a$10$oMVqyW2NbFUwUXam9mqCsuIL8x4qphqjT/1zsipX1wLrKL313Zl9u',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Phil Connors',
          email: 'philconnors@mydomain.com',
          password:
            '$2a$10$YBAu8.dmvtkvoc7LoRtFse7z3UpdmFSZNi5RXFlKdeMdiP7OqNn3u',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Rita Hanson',
          email: 'ritahanson@mydomain.com',
          password:
            '$2a$10$5Fat60byfNJ1FOi1e14G6O6RynAcM7Ez0CPcRSnrbwcBIS2hf4mTq',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Korben Dallas',
          email: 'korbendallas@mydomain.com',
          password:
            '$2a$10$YMPjcIjbI9dapSlAVcwYluJx/HlQjXzy3h9Ujl7jMA4XfMil0cmRW',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Leeloo',
          email: 'leeloo@mydomain.com',
          password:
            '$2a$10$H8ou38Fa/tMhV4tUVVWDfOqklLtheAzqQcd/qY65m6xJWf0QAICG2',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'David Norris',
          email: 'davidnorris@mydomain.com',
          password:
            '$2a$10$QFVivtDOBRECN5qVaeR8.OoE9RCJANhx6ViOrk5I.3xftYaMnDBy.',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Elise Sellas',
          email: 'elisesellas@mydomain.com',
          password:
            '$2a$10$a2cREBPTAL81u7vVIbf7/.iKa9s/h05RaXmz1NxCZDEN46SeGCVnu',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Donald J. Darko',
          email: 'donaldjdarko@mydomain.com',
          password:
            '$2a$10$GA4NLmu9mcOxArRwZ8pJmOv4pVFsal5pApmvXqiOQ/l.c6fIIVfsq',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
        {
          name: 'Gretchen Ross',
          email: 'gretchenross@mydomain.com',
          password:
            '$2a$10$BNp3oecXeJzmSkZ5GXpfxusBXgsHvA9.43Atg46k93DkY4t0aGIxK',
          image: 'img/users/default.png',
          role: 'client',
          status: 'active',
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
          last_login: knex.fn.now(),
        },
      ])
    )
}
