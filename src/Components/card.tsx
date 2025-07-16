

export const Card = (props : any) =>{
    return(
        <div className="p-2">
            <img  className="rounded-xl" src={props.thumbnailImage} alt="" />
            <div className="grid grid-cols-10 ">
                <div className="col-span-1 pt-5 " >
                    <img className="rounded-full w-10 h-10"   src= {props.logoImage} alt="" />
                </div>
                <div className="col-span-7 font-semibold pr-10 pt-5">
                    {props.title}
                </div>
                <div className="col-span-15 pl-12 text-sm text-gray-600">
                    {props.author} 
                </div>
                <div className="col-span-15 pl-12 pb-10 text-sm text-gray-600">
                     {props.views} | {props.timeStamps}
                     
                </div>
            </div>
        </div>
    )
}