function getSongs(array) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const requiredType = array.pop(); 
    const songs = array.slice(1); // taking the only the songs: {typeList}_{name}_{time}

    const filteredSongs = songs
        .map((songAsText) => {
            const [type, name, length] = songAsText.split("_");
            return new Song(type, name, length);
        })
        .filter((song) => requiredType === "all" || song.typeList === requiredType)
        .map((song) => song.name)
        .join("\n");

    console.log(filteredSongs);
}

getSongs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
