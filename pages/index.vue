<template>
  <section>
    <ul v-for="(linkGroup, i) in linkGroups" :key="i">
      <li v-for="(link, j) in linkGroup" :key="j">
        <a :href="link.link">{{ link.label }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: () => ({
    linkGroups: [
      [
        {
          label: 'Facebook',
          link: 'https://web.facebook.com',
        },
        {
          label: 'Gmail',
          link: 'https://mail.google.com/',
        },
        {
          label: 'Keep',
          link: 'https://keep.google.com',
        },
        {
          label: 'Drive',
          link: 'https://drive.google.com/drive/',
        },
      ],
      [
        { 
          label: 'Youtube',
          link: 'https://www.youtube.com',
        },
        {
          label: 'Sound Cloud',
          link: 'https://soundcloud.com/stream',
        },
        {
          label: 'Spotify',
          link: 'https://open.spotify.com/collection',
        },
      ],
      [
        {
          label: 'Hacker News',
          link: 'https://news.ycombinator.com',
        },
        { 
          label: 'The Radavist',
          link: 'http://theradavist.com',
        },
        {
          label: 'Apartment Theraphy',
          link: 'http://www.apartmenttherapy.com',
        },
        {
          label: 'Straightline',
          link: 'http://bm.straightline.jp',
        },
        {
          label: 'The Setup',
          link: 'https://usesthis.com',
        },
      ],
      [
        {
          label: 'r/Philippines',
          link: 'https://www.reddit.com/r/Philippines',
        },
        {
          label: 'r/OnePiece',
          link: 'https://www.reddit.com/r/OnePiece',
        },
        {
          label: 'r/hiphopheads',
          link: 'https://www.reddit.com/r/hiphopheads',
        },
        {
          label: 'r/BlackPeopleTwitter',
          link: 'https://www.reddit.com/r/BlackPeopleTwitter',
        },
      ],
      [
        {
          label: '/g/',
          link: 'https://boards.4chan.org/g/',
        },
        {
          label: '/ic/',
          link: 'https://boards.4chan.org/ic/',
        },
        {
          label: '/p/',
          link: 'https://boards.4chan.org/p/',
        },
        {
          label: '/biz/',
          link: 'https://boards.4chan.org/biz/',
        },
      ]
    ],
  })
}
</script>
