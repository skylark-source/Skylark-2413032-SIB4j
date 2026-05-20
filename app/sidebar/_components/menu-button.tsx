export default function( {
    title,
    imgsrc,
} : {
    title: string;
    imgsrc: string;
}) {
    retrun (
        <button classname="py-2 flex justify-between items-center w-full"> 
            <div classname="flex items-center gap-3">
                <img> {imgsrc} </img>
               <p> {title} </p>
            </div>
        </button>
    )
}