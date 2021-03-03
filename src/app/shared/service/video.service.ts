import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videoList = [{
      intPk: 1,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",

      title: "Walking Home",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: '21M'
    },
    {
      intPk: 2,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",

      title: "Say It to Me Softly",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 3,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",

      title: "What’s Stopping You?",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 4,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",

      title: "In My Arms Tonight",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 5,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",

      title: "Touch the Moon",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 6,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",

      title: "Racing to Somewhere",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 7,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",

      title: "Thunder In The Rain",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 8,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",

      title: "Always Good To You",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 9,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",

      title: "Closer Than You Think",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 10,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",

      title: "Walking Home",
      likes: 45,
      unlikes: 12,
      date: "12/12/2021",
      views: "41M"
    },
    {
      intPk: 11,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",

      title: "Say It to Me Softly",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 12,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",

      title: "What’s Stopping You?",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 13,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",

      title: "What’s Stopping You?",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 14,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",

      title: "In My Arms Tonight",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 15,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
      title: "Touch the Moon",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 16,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
      title: "Racing to Somewhere",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 17,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
      title: "Thunder In The Rain",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 18,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
      title: "Always Good To You",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 19,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
      title: "Closer Than You Think",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 20,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
      title: "Walking Home",
      likes: 45,
      unlikes: 12,
      date: "12/12/2021",
      views: "41M"
    },
    {
      intPk: 21,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
      title: "Say It to Me Softly",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    },
    {
      intPk: 22,
      link: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
      title: "What’s Stopping You?",
      name: "John Doe",
      like: 45,
      unlike: 12,
      date: "12/12/2021",
      views: "41M"

    }
  ];

  constructor() {}

}
