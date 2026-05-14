export const getTilesForMarqueeBar = async()=>{
    const res = await fetch("https://tiles-data-api.onrender.com/tiles/");
    const data = await res.json();
    return data.slice(-4);
}

export const getFeaturedTiles = async()=>{
    const res = await fetch("https://tiles-data-api.onrender.com/tiles/");
    const data = await res.json();
    return data.slice(0,4);
}

export const getTileDetails = async(id)=>{
    const res = await fetch(`https://tiles-data-api.onrender.com/tiles/${id}`);
    const data = await res.json();
    return data;
}