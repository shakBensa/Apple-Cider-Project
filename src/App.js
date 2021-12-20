import useLocalStorage from 'use-local-storage'
import './App.css';
import Track from './components/Track.jsx';
function App() {

  const defaultColor = window.matchMedia('(prefers-color-scheme: A)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultColor ? 'A' : 'B');
  const switchTheme = () => {
    const newTheme = theme === 'A' ? 'B' : 'A';
    setTheme(newTheme)
  }
  const tracks = [{
    name: 'Fallen Leaves',
    img: 'https://i.scdn.co/image/ab67616d00001e029f310617c9e5eeb2cee271a2',
    spotify: {
      img: 'https://www.pngplay.com/wp-content/uploads/12/Spotify-Logo-Transparent-PNG.png',
      link: 'https://open.spotify.com/track/19E00nRbw0C1W3S5Q6b6f8?si=93b52a5484064d29'
    },
    apple: {
      img: 'https://cdn.iconscout.com/icon/free/png-256/apple-music-3628037-3030418.png',
      link: 'https://music.apple.com/us/album/fallen-leaves/1506447257?i=1506447258'
    },
    deezer: {
      img: 'https://cdn-icons-png.flaticon.com/512/49/49383.png',
      link: 'https://deezer.page.link/kmKWX9MbHT7J2ahs6'
    }
  }, {
    name: 'Sleep Forever',
    img: 'https://i.scdn.co/image/ab67616d00001e020a6b04c7f847a9a4366b4aa8',
    spotify: {
      img: 'https://www.pngplay.com/wp-content/uploads/12/Spotify-Logo-Transparent-PNG.png',
      link: 'https://open.spotify.com/track/407CEHFJ4SFDYYltaHotHr?si=85861b44037a4ef9'
    },
    apple: {
      img: 'https://cdn.iconscout.com/icon/free/png-256/apple-music-3628037-3030418.png',
      link: 'https://music.apple.com/us/album/one-for-kiefer-single/1541559763'
    },
    deezer: {
      img: 'https://cdn-icons-png.flaticon.com/512/49/49383.png',
      link: 'https://deezer.page.link/WhQkgoHB62N2oCnS8'
    }
  },{
    name: 'Watch Out!',
    img: 'https://i.scdn.co/image/ab67616d00001e02b904c28381482e10a85d933e',
    spotify: {
      img: 'https://www.pngplay.com/wp-content/uploads/12/Spotify-Logo-Transparent-PNG.png',
      link: 'https://open.spotify.com/track/7wwEpq1NGnKB41O8zS9CgM?si=f39c93a6ebca402b'
    },
    apple: {
      img: 'https://cdn.iconscout.com/icon/free/png-256/apple-music-3628037-3030418.png',
      link: 'https://music.apple.com/us/album/watch-out/1509449868?i=1509449869'
    },
    deezer: {
      img: 'https://cdn-icons-png.flaticon.com/512/49/49383.png',
      link: 'https://deezer.page.link/tjXV7GdGJUpm4UnJ7'
    }
  }, {
    name: 'Five Thirty Am',
    img: 'https://i.scdn.co/image/ab67616d00001e023ab061c1ff684644e0725dde',
    spotify: {
      img: 'https://www.pngplay.com/wp-content/uploads/12/Spotify-Logo-Transparent-PNG.png',
      link: 'https://open.spotify.com/track/0JIjlW3EVZYmWE33Y1qrDH?si=1c844a99cdf94e3c'
    },
    apple: {
      img: 'https://cdn.iconscout.com/icon/free/png-256/apple-music-3628037-3030418.png',
      link: 'https://music.apple.com/nz/album/five-thirty-am/1522925468?i=1522925469'
    },
    deezer: {
      img: 'https://cdn-icons-png.flaticon.com/512/49/49383.png',
      link: 'https://deezer.page.link/tjXV7GdGJUpm4UnJ7'
    }
  }, {
    name: 'Ocean Breeze',
    img: 'https://i.scdn.co/image/ab67616d00001e0285888a5536f3d7802731674b',
    spotify: {
      img: 'https://www.pngplay.com/wp-content/uploads/12/Spotify-Logo-Transparent-PNG.png',
      link: 'https://open.spotify.com/track/773iFzMqqX4r9iAZpJ1kUP?si=b42842a6a4944308'
    },
    apple: {
      img: 'https://cdn.iconscout.com/icon/free/png-256/apple-music-3628037-3030418.png',
      link: 'https://music.apple.com/us/album/ocean-breeze/1522418177?i=1522418178'
    },
    deezer: {
      img: 'https://cdn-icons-png.flaticon.com/512/49/49383.png',
      link: 'https://deezer.page.link/M8DYz2XaymTCKD1y7'
    }
  }, {
    name: 'Down Bad',
    img: 'https://i.scdn.co/image/ab67616d00001e025e2378079388c41e4201f906',
    spotify: {
      img: 'https://www.pngplay.com/wp-content/uploads/12/Spotify-Logo-Transparent-PNG.png',
      link: 'https://open.spotify.com/track/1MS7Dr5A86DeO4wioap4ph?si=dd1ef3741ee64633'
    },
    apple: {
      img: 'https://cdn.iconscout.com/icon/free/png-256/apple-music-3628037-3030418.png',
      link: 'https://music.apple.com/nz/album/down-bad-single/1527137317'
    },
    deezer: {
      img: 'https://cdn-icons-png.flaticon.com/512/49/49383.png',
      link: 'https://deezer.page.link/kiF9LeB4ZrT3yeYP6'
    }
  }, {
    name: 'Shuffle My Deck',
    img: 'https://i.scdn.co/image/ab67616d00001e02fa5038befd939d14ae00e05a',
    spotify: {
      img: 'https://www.pngplay.com/wp-content/uploads/12/Spotify-Logo-Transparent-PNG.png',
      link: 'https://open.spotify.com/track/3HIMWyaRgm7fJ7HOzx0zOM?si=70574cac44844846'
    },
    apple: {
      img: 'https://cdn.iconscout.com/icon/free/png-256/apple-music-3628037-3030418.png',
      link: 'https://music.apple.com/nz/album/shuffle-my-deck-single/1528034221'
    },
    deezer: {
      img: 'https://cdn-icons-png.flaticon.com/512/49/49383.png',
      link: 'https://deezer.page.link/nu6Ra7qASS7oAVC76'
    }
  }, {
    name: 'Smooth as Butter',
    img: 'https://i.scdn.co/image/ab67616d00001e02e51e832bfc1197b57edcfea3',
    spotify: {
      img: 'https://www.pngplay.com/wp-content/uploads/12/Spotify-Logo-Transparent-PNG.png',
      link: 'https://open.spotify.com/track/7sGCuUp73f6KVvOqVePBq3?si=35d53883fd2f4fa7'
    },
    apple: {
      img: 'https://cdn.iconscout.com/icon/free/png-256/apple-music-3628037-3030418.png',
      link: 'https://music.apple.com/nz/album/smooth-as-butter-single/1530220668'
    },
    deezer: {
      img: 'https://cdn-icons-png.flaticon.com/512/49/49383.png',
      link: 'https://deezer.page.link/WXBnLwQGfUyg7JFS6'
    }
  },{
    name: 'One For Kiefer',
    img: 'https://i.scdn.co/image/ab67616d00001e020bceebf0bb70cca7082ad1ad',
    spotify: {
      img: 'https://www.pngplay.com/wp-content/uploads/12/Spotify-Logo-Transparent-PNG.png',
      link: 'https://open.spotify.com/track/1OSct9o8jultyOWeuKzn6G?si=c00a97a40b71478d'
    },
    apple: {
      img: 'https://cdn.iconscout.com/icon/free/png-256/apple-music-3628037-3030418.png',
      link: 'https://music.apple.com/us/album/one-for-kiefer-single/1541559763'
    },
    deezer: {
      img: 'https://cdn-icons-png.flaticon.com/512/49/49383.png',
      link: 'https://deezer.page.link/1jkpGKgsfK1sMDPb6'
    }
  },{
    name: 'Hustle Hard',
    img: 'https://i.scdn.co/image/ab67616d00001e025bcffab0c2251e45dd9a22c0',
    spotify: {
      img: 'https://www.pngplay.com/wp-content/uploads/12/Spotify-Logo-Transparent-PNG.png',
      link: 'https://open.spotify.com/track/3M5nf4Ch7m95X5xx18eu6J?si=d337395e9a02415b'
    },
    apple: {
      img: 'https://cdn.iconscout.com/icon/free/png-256/apple-music-3628037-3030418.png',
      link: 'https://music.apple.com/us/album/hustle-hard/1542551616?i=1542551617'
    },
    deezer: {
      img: 'https://cdn-icons-png.flaticon.com/512/49/49383.png',
      link: 'https://deezer.page.link/RwK2HiVZiortn9Zz9'
    }
  },{
    name: 'Freshly Baked',
    img: 'https://i.scdn.co/image/ab67616d00001e023c03b5ab62848cd5333f0b81',
    spotify: {
      img: 'https://www.pngplay.com/wp-content/uploads/12/Spotify-Logo-Transparent-PNG.png',
      link: 'https://open.spotify.com/track/1ZnETPm02l8Y9N0X8hjXPI?si=d60be736f44e48c8'
    },
    apple: {
      img: 'https://cdn.iconscout.com/icon/free/png-256/apple-music-3628037-3030418.png',
      link: 'https://music.apple.com/us/album/freshly-baked/1566820607?i=1566820612'
    },
    deezer: {
      img: 'https://cdn-icons-png.flaticon.com/512/49/49383.png',
      link: 'https://deezer.page.link/wp9cTTfyJWHhaYmE7'
    }
  },{
    name: 'Slow Down',
    img: 'https://i.scdn.co/image/ab67616d00001e022b1dd5e4d301206006ac6fbf',
    spotify: {
      img: 'https://www.pngplay.com/wp-content/uploads/12/Spotify-Logo-Transparent-PNG.png',
      link: 'https://open.spotify.com/track/51S0sMKd9eYBhVbv0oB4bZ?si=b708826dc81b449f'
    },
    apple: {
      img: 'https://cdn.iconscout.com/icon/free/png-256/apple-music-3628037-3030418.png',
      link: 'https://music.apple.com/us/album/slow-down/1586121401?i=1586121402'
    }
    ,
    deezer: {
      img: 'https://cdn-icons-png.flaticon.com/512/49/49383.png',
      link: 'https://deezer.page.link/BefWN2uvGiYZLYdj7'
    }
  },]
  return (
    <div className="App" data-theme={theme}>

      <button onClick={switchTheme}>
        Switch Theme
      </button>
      <br/>
      <img className='logo' src='logo.jpg'alt='logo'/>
      <section style={{ marginTop: '40px' }} className='tracks'>

        <div className="container">
{tracks.reverse().map((x,i) => (
            <Track name={tracks[i].name} img={tracks[i].img} spotify={tracks[i].spotify} apple={tracks[i].apple} deezer={tracks[i].deezer} />

  ))}
        </div>
      </section>

    </div>
  );
}

export default App;
