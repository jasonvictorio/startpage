<template>
  <section class="pa4">
    <ul v-for="(linkGroup, i) in linkGroups" :key="i" class="mb4">
      <li v-for="(link, j) in linkGroup" :key="j">
        <a :href="link.link" class="link black db pa1 dim">{{ link.label }} <span class="silver">{{ link.link }}</span></a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: () => ({
    linkGroups: [
      [
        { label: 'Facebook', link: 'https://web.facebook.com' },
        { label: 'Gmail', link: 'https://mail.google.com/' },
        { label: 'Keep', link: 'https://keep.google.com' },
        { label: 'Drive', link: 'https://drive.google.com/drive/' },
        { label: 'Photos', link: 'https://photos.google.com/' },
      ],
      [
        { label: 'Youtube', link: 'https://www.youtube.com' },
        { label: 'Sound Cloud', link: 'https://soundcloud.com/stream' },
        { label: 'Spotify', link: 'https://open.spotify.com/collection' },
      ],
      [
        { label: 'Hacker News', link: 'https://news.ycombinator.com' },
        { label: 'The Radavist', link: 'http://theradavist.com' },
        { label: 'Apartment Theraphy', link: 'http://www.apartmenttherapy.com' },
        { label: 'The Setup', link: 'https://usesthis.com' },
        { label: 'KTT', link: 'http://www.kanyetothe.com/forum/' },
      ],
      [
        { label: 'Figma', link: 'https://www.figma.com/files/recent' },
        { label: 'Unsplash', link: 'https://unsplash.com/' },
        { label: 'Straightline', link: 'http://bm.straightline.jp' },
        { label: 'Siiimple', link: 'https://siiimple.com/' },
        { label: 'Behance', link: 'https://www.behance.net/' },
        { label: 'Google Fonts', link: 'https://fonts.google.com/' },
        { label: 'Lorem ipsum', link: 'https://loremipsum.io/' },
      ],
      [
        { label: 'r/Philippines', link: 'https://www.reddit.com/r/Philippines' },
        { label: 'r/OnePiece', link: 'https://www.reddit.com/r/OnePiece' },
        { label: 'r/hiphopheads', link: 'https://www.reddit.com/r/hiphopheads' },
        { label: 'r/BlackPeopleTwitter', link: 'https://www.reddit.com/r/BlackPeopleTwitter' },
        { label: 'r/webdev', link: 'https://www.reddit.com/r/webdev' },
      ],
      [
        { label: '/g/', link: 'https://boards.4chan.org/g/' },
        { label: '/ic/', link: 'https://boards.4chan.org/ic/' },
        { label: '/p/', link: 'https://boards.4chan.org/p/' },
        { label: '/biz/', link: 'https://boards.4chan.org/biz/' },
      ],
    ],
  })
}
</script>
