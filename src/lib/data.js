export const getTilesForMarqueeBar = async()=>{
    const res = await fetch("https://tiles-data-api.onrender.com/tiles/");
    const data = await res.json();
    return data.slice(-4);
}