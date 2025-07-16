import { Card } from "./card"

const Videos = [{
    title : "How I cracked Gsoc as a Tier 3 College Student",
    author : "Bishal Barman",
    views : "4k Views",
    timeStamps : "3 months ago",
    thumbnailImage : "thumbnail.jpg",
    logoImage : "logo.jpg"
},{
  title : "How I cracked Gsoc as a Tier 3 College Student",
    author : "Bishal Barman",
    views : "4k Views",
    timeStamps : "3 months ago",
    thumbnailImage : "thumbnail.jpg",
    logoImage : "logo.jpg"
},{  
    title : "How I cracked Gsoc as a Tier 3 College Student",
    author : "Bishal Barman",
    views : "4k Views",
    timeStamps : "3 months ago",
    thumbnailImage : "thumbnail.jpg",
    logoImage : "logo.jpg"
},{
    title : "How I cracked Gsoc as a Tier 3 College Student",
    author : "Bishal Barman",
    views : "4k Views",
    timeStamps : "3 months ago",
    thumbnailImage : "thumbnail.jpg",
    logoImage : "logo.jpg"
},{
    title : "How I cracked Gsoc as a Tier 3 College Student",
    author : "Bishal Barman",
    views : "4k Views",
    timeStamps : "3 months ago",
    thumbnailImage : "thumbnail.jpg",
    logoImage : "logo.jpg"
},{
},]

const Videogrid = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-3">
       {Videos.map(video => <div>
        <Card  
            title = {video.title}
            author = {video.author} 
            views = {video.views}
            timeStamps = {video.timeStamps}
            thumbnailImage = {video.thumbnailImage}
            logoImage = {video.logoImage}/>
       </div>)}
    </div>
  )
}

export default Videogrid
