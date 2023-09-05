import '../../styles/new-homes.css'
import React, { useEffect, useState } from 'react'
import { Hero } from './components/Hero'
import { newHome1, newHome2, newHome3, newHome4, newHome5, featureNews, bannerNewHome, bannerNewApartment, bannerNewLand, bannerNewHouseAndLand, bannerNewBuilder, bannerNewHomeDesign } from './assets'
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NavbarNewHomesMain from './components/NavbarNewHomesMain'
import axios from 'axios'
import { config } from '../../services/config'
import Footer from '../../components/Footer'
import QuickSearch from '../../components/QuickSearch'

let lengthContentFeatured = 0;
let defaultLengthContentFeatured = 3;
let lengthContent = 0;
let defaultLengthContent = 5;
let lengthContentPopularTips = 0;
let defaultLengthContentPopularTips = 3;

export default function NewHomes(props) {
  // states
  const [categories] = useState([
    {
      name: "New Apartments",
      path: "/new-apartments",
      image: newHome1
    },
    {
      name: "Land Estates",
      path: "/new-land",
      image: newHome2
    },
    {
      name: "House & Land",
      path: "/new-home-and-land",
      image: newHome3
    },
    {
      name: "Builders",
      path: "/new-builder",
      image: newHome4
    },
    {
      name: "Home Designs",
      path: "/new-home-design",
      image: newHome5
    }
  ])

  const searchParams = new URLSearchParams(document.location.search)

  const [ featuredNews, setFeaturedNews ]       = useState([]);
  const [ popularTips, setPopularTips ]         = useState([]);
  const [ listContent, setListContent ]         = useState([])
  const [ articleCategory, setArticleCategory ] = useState(searchParams.get('categoryType') || 1);
  const [ openList, setOpenList ]               = useState(false)
  const [ region, setRegion ]                   = useState('Jakarta Selatan')
  const [ listRegion, setListRegion ]           = useState([])
  const mobileSize = useMediaQuery('(max-width: 700px)')

  useEffect(() => {
    axios.get(config.baseURL + `/article?articleCategory=${articleCategory}&articleType=1&offset=0&limit=10`)
      .then(data => {
        setFeaturedNews(data.data.data)
        if (data.data.detailDTO.total <= 3) {
          document.getElementById('rightArrowMenuFeatured').style.display = 'none'
        } else if (!mobileSize) {
          document.getElementById('rightArrowMenuFeatured').style.display = 'block'
        } else {
          document.getElementById('rightArrowMenuFeatured').style.display = 'none'
        }
      })
      .catch(err => {
        console.error(err.message);
      });

    axios.get(config.baseURL + `/article?articleCategory=${articleCategory}&articleType=2&offset=0&limit=10`)
      .then(data => {
        setPopularTips(data.data.data)
        if (data.data.detailDTO.total <= 3) {
          document.getElementById('rightArrowMenuPopularTips').style.display = 'none'
        } else if (!mobileSize) {
          document.getElementById('rightArrowMenuPopularTips').style.display = 'block'
        } else {
          document.getElementById('rightArrowMenuPopularTips').style.display = 'none'
        }
      })
      .catch(err => {
        console.error(err.message);
      });

    axios.get(config.baseURL + `/subArea?limit=6&offset=0&areaId=1&subAreaCategory=${articleCategory}`)
      .then(data => {
        setListContent(data.data.data)
        if (data.data.detailDTO.total <= 5) {
          document.getElementById('rightArrowMenuContent').style.display = 'none'
        }
      })
      .catch(err => {
        console.error(err.message);
      });

    }, [articleCategory]);
    
    useEffect(() => {
      axios.get(config.baseURL + `/area`)
        .then(data => {
          setRegion(data.data.data[0].areaName)
          setListRegion(data.data.data)
        })
        .catch(err => {
          console.error("Error Area : " + err.message);
        });
    }, [region])

  const handleExploreSubMenu = (data, path) => {
    setArticleCategory(data)
    window.location.href = path + `?categoryType=${data}`
  }

  const handleChangeSubMenu = (data) => {
    setArticleCategory(data)
  }

  const scrollRightContent = () => {
    const scroll = document.querySelector(".cardMainContent");

    scroll.scrollBy({
      left: 380,
      behavior: 'smooth'
    })

    defaultLengthContent += 1;
    if (lengthContent === defaultLengthContent) {
      document.getElementById('rightArrowMenuContent').style.display = 'none'
    } else {
      document.getElementById('leftArrowMenuContent').style.display = 'block'
      document.getElementById('rightArrowMenuContent').style.display = 'block'
    }
  }

  const scrollLeftContent = () => {
    document.querySelector(".cardMainContent").scrollBy({
      left: -380,
      behavior: 'smooth'
    })

    defaultLengthContent -= 1;
    if (defaultLengthContent === 5) {
      document.getElementById('leftArrowMenuContent').style.display = 'none'
    } else {
      document.getElementById('leftArrowMenuContent').style.display = 'block'
      document.getElementById('rightArrowMenuContent').style.display = 'block'
    }
  }

  const scrollRightFeatured = () => {
    const scroll = document.querySelector(".cardMainFeatured");

    scroll.scrollBy({
      left: 380,
      behavior: 'smooth'
    })

    defaultLengthContentFeatured += 1;
    if (lengthContentFeatured === defaultLengthContentFeatured) {
      document.getElementById('rightArrowMenuFeatured').style.display = 'none'
    } else {
      document.getElementById('leftArrowMenuFeatured').style.display = 'block'
      document.getElementById('rightArrowMenuFeatured').style.display = 'block'
    }
  }

  const scrollLeftFeatured = () => {
    document.querySelector(".cardMainFeatured").scrollBy({
      left: -380,
      behavior: 'smooth'
    })

    defaultLengthContentFeatured -= 1;
    if (defaultLengthContentFeatured === 3) {
      document.getElementById('leftArrowMenuFeatured').style.display = 'none'
    } else {
      document.getElementById('leftArrowMenuFeatured').style.display = 'block'
      document.getElementById('rightArrowMenuFeatured').style.display = 'block'
    }
  }

  const scrollRightPopularTips = () => {
    const scroll = document.querySelector(".cardMainPopularTips");

    scroll.scrollBy({
      left: 380,
      behavior: 'smooth'
    })

    defaultLengthContentPopularTips += 1;
    if (lengthContentPopularTips === defaultLengthContentPopularTips) {
      document.getElementById('rightArrowMenuPopularTips').style.display = 'none'
      document.getElementById('leftArrowMenuPopularTips').style.display = 'block'
    } else {
      document.getElementById('leftArrowMenuPopularTips').style.display = 'block'
      document.getElementById('rightArrowMenuPopularTips').style.display = 'block'
    }
  }

  const scrollLeftPopularTips = () => {
    document.querySelector(".cardMainPopularTips").scrollBy({
      left: -380,
      behavior: 'smooth'
    })

    defaultLengthContentPopularTips -= 1;
    if (defaultLengthContentPopularTips === 3) {
      document.getElementById('leftArrowMenuPopularTips').style.display = 'none'
      document.getElementById('rightArrowMenuPopularTips').style.display = 'block'
    } else {
      document.getElementById('leftArrowMenuPopularTips').style.display = 'block'
      document.getElementById('rightArrowMenuPopularTips').style.display = 'block'
    }
  }

  const handleChooseRegion = (e) => {
    document.getElementById("region-text").innerText = e.target.textContent
    setRegion(e.target.textContent)
    const arrow = document.getElementById("arrow-region")
    if (openList) {
      arrow.style.rotate = '0deg'
    } else {
      arrow.style.rotate = '180deg'
    }
    setOpenList(!openList)
  }

  const closeListRegion = () => {
    const arrow = document.getElementById("arrow-region")
    if (openList) {
      arrow.style.rotate = '0deg'
    } else {
      arrow.style.rotate = '180deg'
    }
    setOpenList(!openList)
  }

  const searching = () => {
    const data = document.querySelector("input[name='search']");
    const page = window.location.href.split('/').pop()

    window.location.href = `/${page}/${data.value}`
  }

  const handleClickTop = (data) => {
    window.location.href = `/${props.route}/${data}`
  }

  const { withSearch, route } = props;

  lengthContentFeatured = featuredNews.length;
  lengthContentPopularTips = popularTips.length;

  // for change banner hero
  let banner,
      breadcrumbsTitle,
      headerContent;

  switch (route) {
    case "new-homes":
      banner = bannerNewHome
      document.title = "New Homes - Explore"
      headerContent = "Explore all new homes in Indonesia"
      break;
    case "new-apartments":
      banner = bannerNewApartment
      document.title = "New Homes - New Apartments"
      breadcrumbsTitle = "New Apartments"
      headerContent = `Top location for new apartments & off the plan properties in ${region}`
      break;
    case "new-land":
      banner = bannerNewLand
      document.title = "New Homes - New Land Estates"
      breadcrumbsTitle = "New Land Estates"
      headerContent = `Top areas for new land estates in ${region}`
      break;
    case "new-home-and-land":
      banner = bannerNewHouseAndLand
      document.title = "New Homes - New Home and Land"
      breadcrumbsTitle = "Home and Land Packages"
      headerContent = "Discover new homes, house and land packages in Indonesia"
      break;
    case "new-builder":
      banner = bannerNewBuilder
      document.title = "New Homes - New Builders"
      breadcrumbsTitle = "Home Builders"
      headerContent = "Find a builder to design and build your dream home"
      break;
    case "new-home-design":
      banner = bannerNewHomeDesign
      document.title = "New Homes - New Home Designs"
      breadcrumbsTitle = "Home Designs"
      headerContent = "Find the best house design for your new home"
      break;
    default:
      banner = bannerNewHome
      break;
  }

  const openSearchRegion = route === "new-apartments" || route === "new-land";

  return (
    <div>
      <NavbarNewHomesMain menu="new-homes"/>
      <Hero listRegion={listRegion} handleChangeSubMenu={handleChangeSubMenu} withSearch={withSearch} breadcrumbsTitle={breadcrumbsTitle} openSearchRegion={openSearchRegion} openList={openList} closeListRegion={closeListRegion} region={region} chooseRegion={handleChooseRegion} banner={banner} searching={searching} route={route} />

      <Container style={{ marginTop: mobileSize ? '20px' : '85px' }}>
        <h2 className='content-title'>{headerContent}</h2>
        <Grid display={route === 'new-homes' ? 'flex' : 'none'} sx={{ maxWidth: '1125px', overflowX: 'auto' }}>
          {categories.map((category, i) => (
            <Grid onClick={() => handleExploreSubMenu(i + 2, category.path)} key={i} item lg={2} sx={{ marginRight: '25px', cursor: 'pointer' }} className='category'>
              <img src={category.image} alt='images' width='200px' height='150px' className='category-image' />
              <Typography fontWeight={600}>{category.name}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid display={route !== 'new-homes' ? 'flex' : 'none'} sx={{ maxWidth: '1125px', overflowX: mobileSize ? 'auto' : 'hidden', overflowY: 'hidden' }} className='cardMainContent'>
          <ArrowBackIosIcon className="leftArrowMenuContent" id="leftArrowMenuContents" onClick={scrollLeftContent} sx={{ display: 'none' }} />
          {listContent.map((content, i) => (
            <Grid onClick={() => handleClickTop(content.subAreaName)} key={i} item lg={2} sx={{ marginRight: '25px', cursor: 'pointer' }} className='category'>
              <img src={content.imageLink} alt='images' width='200px' height='150px' className='category-image' />
              <Typography fontWeight={600}>{content.subAreaName}</Typography>
            </Grid>
          ))}
          {/* <ArrowForwardIosIcon className='rightArrowMenuContent' id="rightArrowMenuContent" onClick={scrollRightContent} sx={{ display: mobileSize ? 'none' : 'block' }} /> */}
          <ArrowForwardIosIcon sx={{ display: mobileSize ? 'none' : 'block', position: 'absolute', right: 0, top: 55 }} />
        </Grid>

        <h2 className='content-title'>Featured News & Insight for New Homes</h2>
        <Grid display={'flex'}>
          <ArrowBackIosIcon className="leftArrowMenuFeatured" id="leftArrowMenuFeatured" onClick={scrollLeftFeatured} sx={{ display: 'none' }} />
          <Grid display={'flex'} style={{ maxWidth: '1125px', overflowX: mobileSize ? 'auto' : 'hidden', overflowY: 'hidden' }} className='cardMainFeatured'>
            {featuredNews.map((data, i) => (
              <Grid item lg={4} key={i}>
                <img
                  style={{ marginRight: '25px', width: '356px', height: '210px' }}
                  src={data.image1}
                  title="green iguana"
                  alt='image'
                  loading='lazy'
                />
                <Typography gutterBottom variant="h5" component="div" fontSize='20px' width={'356px'}>
                  {data.articleTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary" marginTop='25px'>
                  Sponsored By {data.authorName}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <ArrowForwardIosIcon className='rightArrowMenuFeatured' id="rightArrowMenuFeatured" onClick={scrollRightFeatured} sx={{ display: mobileSize ? 'none' : 'block' }} />
        </Grid>

        <h2 className='content-title'>Popular Tips, Guides & Inspiration for New Homes</h2>
        <Grid display={'flex'} >
          <ArrowBackIosIcon className="leftArrowMenuPopularTips" id="leftArrowMenuPopularTips" onClick={scrollLeftPopularTips} style={{ display: 'none' }} />
          <Grid display={'flex'} sx={{ maxWidth: '1125px', overflowX: mobileSize ? 'auto' : 'hidden', overflowY: 'hidden', marginBottom: '20px' }} className='cardMainPopularTips'>
            {popularTips.map((data, i) => (
              <Grid item lg={4} key={i}>
                <img
                  style={{ marginRight: '25px', width: '356px', height: '210px' }}
                  src={data.image1}
                  title="green iguana"
                  alt='image'
                  loading='lazy'
                />
                <Typography gutterBottom variant="h5" component="div" fontSize='20px'>
                  {data.articleTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary" marginTop='25px'>
                  Sponsored By {data.authorName}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <ArrowForwardIosIcon className='rightArrowMenuPopularTips' id="rightArrowMenuPopularTips" onClick={scrollRightPopularTips} sx={{ display: mobileSize ? 'none' : 'block' }} />
        </Grid>
      </Container>
      <div className='quickSearch-section'>
        <QuickSearch />
      </div>

      <div className='footer-section'>
        <Footer />
      </div>
    </div>
  )
}