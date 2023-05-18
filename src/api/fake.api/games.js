const games = [
    {
        id: 1,
        title: "Atomic Heart",
        characteristics: {
            developer: "Mundfish",
            publisher: "Mundfish",
            releaseDate: "2022-05-27",
            genres: ["Action", "Adventure", "First-person shooter"]
        },
        sources: {
            image: "https://upload.wikimedia.org/wikipedia/ru/0/01/Atomic_Heart_Cover_Art.jpg",
            video: "https://www.youtube.com/embed/ZXSi4EcxnuY",
            screenshots: [
                "https://mundfish.com/wp-content/uploads/32-5.jpg",
                "https://mundfish.com/wp-content/uploads/38-5.jpg",
                "https://mundfish.com/wp-content/uploads/34-5.jpg",
                "https://mundfish.com/wp-content/uploads/39-5.jpg",
                "https://mundfish.com/wp-content/uploads/40-5.jpg"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 2,
        title: "God of War",
        characteristics: {
            developer: "Santa Monica Studio",
            publisher: "Sony Interactive Entertainment",
            releaseDate: "2018-04-20",
            genres: ["Action", "Adventure"]
        },
        sources: {
            image: "https://upload.wikimedia.org/wikipedia/ru/5/5a/God_of_War_2018_cover.jpg",
            video: "https://www.youtube.com/embed/K0u_kAWLJOA",
            screenshots: [
                "https://image.api.playstation.com/cdn/UP9000/CUSA07408_00/FREE_CONTENT8ZAyD4vEx2iaPIEm98CC/PREVIEW_SCREENSHOT5_161813.jpg",
                "https://image.api.playstation.com/cdn/EP9000/CUSA07412_00/FREE_CONTENTl6R1aUOWS9keQaEAHuw5/GOW_LaunchScreen_02.jpg",
                "https://image.api.playstation.com/cdn/UP9000/CUSA07408_00/FREE_CONTENTvWkRjXWuFKsfDxrEMX6L/PREVIEW_SCREENSHOT8_161813.jpg",
                "https://image.api.playstation.com/cdn/UP9000/CUSA07408_00/FREE_CONTENT9KNPJYc2yOggF42mm9sy/PREVIEW_SCREENSHOT6_161813.jpg",
                "https://sm.ign.com/ign_br/screenshot/default/gow07_fcag.jpg",
                "https://image.api.playstation.com/cdn/UP9000/CUSA07408_00/FREE_CONTENTFIio77kC7V7MT9CjtkJD/PREVIEW_SCREENSHOT7_152721.jpg",
                "https://image.api.playstation.com/cdn/UP9000/CUSA07408_00/FREE_CONTENT6Wfi5sKAgiuM8hs95NNA/PREVIEW_SCREENSHOT1_161813.jpg"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 3,
        title: "Fortnite",
        characteristics: {
            developer: "Epic Games",
            publisher: "Epic Games",
            releaseDate: "2017-07-25",
            genres: ["Battle Royale", "Survival"]
        },
        sources: {
            image: "https://store-images.s-microsoft.com/image/apps.13950.70702278257994163.eb8febd9-1124-4e74-9587-d5082fbfffb5.5422b74c-3e78-408f-8df6-9a88c288b704",
            video: "https://www.youtube.com/embed/rs8YIhsbZxg",
            screenshots: [
                "https://cdn2.unrealengine.com/c4-s2-battle-pass-1920x1080-603842488c24.jpg",
                "https://cdn2.unrealengine.com/fortnite-a-world-without-walls-loading-screen-1920x1080-6cf19507c5b0.jpg",
                "https://cdn2.unrealengine.com/fortnite-grind-rails-1920x1080-cbdee6a21adf.jpg",
                "https://cdn2.unrealengine.com/fortnite-new-biome-image-7-1920x1080-d8ccee4a1f09.jpg",
                "https://www.videogameschronicle.com/files/2022/12/fortnite-chapter-4.webp",
                "https://trackercdn.com/ghost/images/2022/12/41057_fortnite-chapter-4-patch-notes.jpg"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 4,
        title: "Grand Theft Auto V",
        characteristics: {
            developer: "Rockstar North",
            publisher: "Rockstar Games",
            releaseDate: "2013-09-17",
            genres: ["Action", "Adventure", "Open-world"]
        },
        sources: {
            image: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c8/GTAV_Official_Cover_Art.jpg/274px-GTAV_Official_Cover_Art.jpg",
            video: "https://www.youtube.com/embed/QkkoHAzjnUs",
            screenshots: [
                "https://assets.xboxservices.com/assets/0b/17/0b179504-412d-4af7-9e00-3e3d92633577.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg",
                "https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_bab596ea9a6924055cd8c097bba75f052c18025d.1920x1080.jpg?t=1678296348",
                "https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_da39c16db175f6973770bae6b91d411251763152.1920x1080.jpg?t=1678296348",
                "https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_2744f112fa060320d191a50e8b3a92441a648a56.1920x1080.jpg?t=1678296348",
                "https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_d1dfbddaafe8e4e8c3a4d8a9e13cdf89e2deb7ab.1920x1080.jpg?t=1678296348",
                "https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_ef673abfaf1555f10c071c4e5e0cd9d513be4c3c.1920x1080.jpg?t=1678296348",
                "https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_bb5725e2200df97b28908bccb9e8268780489506.1920x1080.jpg?t=1678296348",
                "https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_3ce5439cfdd04d1c53487f7057d45360839c0205.1920x1080.jpg?t=1678296348",
                "https://cdn.akamai.steamstatic.com/steam/apps/271590/ss_3a20a814df620793186348058d9201f1c60b1bc2.1920x1080.jpg?t=1678296348"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 5,
        title: "The Last of Us Part I",
        characteristics: {
            developer: "Naughty Dog",
            publisher: "Sony Interactive Entertainment",
            releaseDate: "2022-09-02",
            genres: ["Action", "Adventure", "Survival"]
        },
        sources: {
            image: "https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S2_1200x1600-41d1b88814bea2ee8cb7986ec24713e0",
            video: "https://www.youtube.com/embed/CxVyuE2Nn_w",
            screenshots: [
                "https://cdn.akamai.steamstatic.com/steam/apps/1888930/ss_3ee73e4d741ba90d9bbabaae105c3e6d2e7941a3.1920x1080.jpg?t=1680282721",
                "https://cdn.akamai.steamstatic.com/steam/apps/1888930/ss_0330e4473e70f6c0850f38204d712d5aa66e6223.1920x1080.jpg?t=1680282721",
                "https://cdn.akamai.steamstatic.com/steam/apps/1888930/ss_1d4757f62cb17a674f451ab18136a87fe5959ad5.1920x1080.jpg?t=1680282721",
                "https://cdn.akamai.steamstatic.com/steam/apps/1888930/ss_e67d2ca76b0c8985a3615afb38c21e893df73272.1920x1080.jpg?t=1680282721"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 6,
        title: "Hogwarts Legacy",
        characteristics: {
            developer: "Portkey Games",
            publisher: "Warner Bros. Interactive Entertainment",
            releaseDate: "2022-04-08",
            genres: ["Action", "Adventure", "RPG"]
        },
        sources: {
            image: "https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S2_1200x1600-2bb94423bf1c7e2fca10577d9f2878b9",
            video: "https://www.youtube.com/embed/1O6Qstncpnc",
            screenshots: [
                "https://cdn-hogwartslegacy.warnerbrosgames.com/media/screen-04.jpg",
                "https://cdn-hogwartslegacy.warnerbrosgames.com/media/screen-08.jpg",
                "https://cdn-hogwartslegacy.warnerbrosgames.com/media/screen-03.jpg",
                "https://cdn-hogwartslegacy.warnerbrosgames.com/media/screen-06.jpg",
                "https://cdn-hogwartslegacy.warnerbrosgames.com/media/screen-14.jpg",
                "https://cdn-hogwartslegacy.warnerbrosgames.com/media/screen-01.jpg",
                "https://cdn-hogwartslegacy.warnerbrosgames.com/media/screen-07.jpg"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 7,
        title: "Deathloop",
        characteristics: {
            developer: "Arkane Studios",
            publisher: "Bethesda Softworks",
            releaseDate: "2021-09-14",
            genres: ["Action", "Adventure"]
        },
        sources: {
            image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DEATHLOOP_ArkaneStudios_S2_1200x1600-d062aa01760072626d27af24af05db77",
            video: "https://www.youtube.com/embed/F8HmSaaISpA",
            screenshots: [
                "https://images.ctfassets.net/rporu91m20dc/7H95Y2dG5y9jYTohIUfyL0/5e525fe534348268cd8468c27ee213ec/6._Deathloop_Spiker.jpg?q=70",
                "https://images.ctfassets.net/rporu91m20dc/4T2BSurgM87CdGYlI9zeav/a913e0aa569d20ab5c206009ce02fc9b/1._Deathloop_DualWielding.jpg?q=70",
                "https://images.ctfassets.net/rporu91m20dc/2LR8EBY2c75M1guMczCtx3/1eaeadaa3d1c2b7696cd3e5c54d85d48/9._Deathloop_NightBlizzard.jpg?q=70",
                "https://images.ctfassets.net/rporu91m20dc/5ypV0pj5tB8jJFeXzeg8SJ/ddbf6dbad8fe161f5ec2b4486e7004e5/5._Deathloop_Havoc.jpg?q=70",
                "https://images.ctfassets.net/rporu91m20dc/2xUKsiCAyt9bzA3YPsbBC9/951e3733d9dc10c88839c86433c040ba/4._Deathloop_Shift.jpg?q=70&q=70&fm=webp"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 8,
        title: "It Takes Two",
        characteristics: {
            publisher: "Electronic Arts",
            developer: "Hazelight Studios",
            releaseDate: "2021-03-26",
            genres: ["Action", "Adventure"]
        },
        sources: {
            image: "https://cdn1.epicgames.com/offer/8ae7b3c0f490471b967ce26cc2f6e0e6/EGS_ItTakesTwo_Hazelight_S2_1200x1600-5c82de2d2e21a841dd06ec27e082777e_1200x1600-5c82de2d2e21a841dd06ec27e082777e",
            video: "https://www.youtube.com/embed/ohClxMmNLQQ",
            screenshots: [
                "https://i.playground.ru/p/cqA15YDjcO5F6aCzfk_OEA.jpeg",
                "https://cdn.akamai.steamstatic.com/steam/apps/1426210/ss_6f7b65b8613afbcb2616bff8ed0283d0629b6572.1920x1080.jpg?t=1679951279",
                "https://cdn.akamai.steamstatic.com/steam/apps/1426210/ss_a15164ddd357ab3c0b2aff575a6b215b2d91b406.1920x1080.jpg?t=1679951279"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 9,
        title: "Resident Evil Village",
        characteristics: {
            genre: ["Survival horror"],
            publisher: "Capcom",
            developer: "Capcom",
            releaseDate: "2021-05-07"
        },
        sources: {
            image: "https://upload.wikimedia.org/wikipedia/ru/2/24/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Resident_Evil_Village.jpg",
            video: "https://www.youtube.com/embed/btFclZUXpzA",
            screenshots: [
                "https://cdn.akamai.steamstatic.com/steam/apps/1196590/ss_d6c5bfb48d7fda343ed583750372b0d3e513ae17.1920x1080.jpg?t=1681094558",
                "https://www.denofgeek.com/wp-content/uploads/2021/05/Resident-Evil-Village-2.jpg?fit=2000%2C1269",
                "https://cdn.akamai.steamstatic.com/steam/apps/1196590/ss_d296efbc9a5d87bf20b2ea19134f35ba203ae813.1920x1080.jpg?t=1681094558",
                "https://www.overclockers.ua/games/resident-evil-village/01-big-resident-evil-village.jpg",
                "https://cdn.akamai.steamstatic.com/steam/apps/1196590/ss_e2bdaa9a0eeae714b3ad3ba49c9ae83a3930f08e.1920x1080.jpg?t=1681094558",
                "https://cdn.akamai.steamstatic.com/steam/apps/1196590/ss_5cba45b96c65e0209c269e8d1d8865537927af33.1920x1080.jpg?t=1681094558",
                "https://cdn.akamai.steamstatic.com/steam/apps/1196590/ss_7579d4a7916fb16607eae522844b307a74bd95ec.1920x1080.jpg?t=1681094558"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 10,
        title: "Returnal",
        characteristics: {
            genre: ["Action", "Roguelike"],
            publisher: "Sony Interactive Entertainment",
            developer: "Housemarque",
            releaseDate: "2021-04-30"
        },
        sources: {
            image: "https://cdn1.epicgames.com/offer/4c461792757541e99c4a16c00834c956/EGS_Returnal_HousemarqueClimaxStudios_S2_1200x1600-617cb4daee4cf45fa937304bceb60a81",
            video: "https://www.youtube.com/embed/OKZV00Esu54",
            screenshots: [
                "https://cdn.cloudflare.steamstatic.com/steam/apps/1649240/ss_7ba021e0dd34bdcfff04a6e600323858acdbec4e.1920x1080.jpg?t=1676476643",
                "https://cdn.cloudflare.steamstatic.com/steam/apps/1649240/ss_e16d48bbc96569c6d1bb77e7f252bd8c4d7724c2.1920x1080.jpg?t=1676476643",
                "https://cdn.akamai.steamstatic.com/steam/apps/1649240/ss_ea2f5b9dd34cd18e05970343edfb36ed0dade475.1920x1080.jpg?t=1676476643",
                "https://cdn.akamai.steamstatic.com/steam/apps/1649240/ss_3c260834df0c87cfc9ac1b457d0ec0eb3b9f367c.1920x1080.jpg?t=1676476643",
                "https://cdn.akamai.steamstatic.com/steam/apps/1649240/ss_e15da2a195556b773ba8a982051f55de50d79a75.1920x1080.jpg?t=1676476643"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 11,
        title: "Back 4 Blood",
        characteristics: {
            genre: ["First-person shooter"],
            publisher: "Warner Bros. Interactive Entertainment",
            developer: "Turtle Rock Studios",
            releaseDate: "2021-10-12"
        },
        sources: {
            image: "https://cdn1.epicgames.com/57dfd95548214a138218e56cd9e5b9d8/offer/EGS_Back4Blood_TurtleRockStudios_S2-1200x1600-0cd4ac84bb5491a81aa6ebfcbea9dfbf.jpg",
            video: "https://www.youtube.com/embed/UkP8dOQrIyk",
            screenshots: [
                "https://cdn.akamai.steamstatic.com/steam/apps/924970/ss_61ba5c1e5ff0992738255a3c6679fdbc2cd659de.1920x1080.jpg?t=1672856194",
                "https://cdn.akamai.steamstatic.com/steam/apps/924970/ss_01d625277a7dc76a67f78de3a3ed1e633d205ddd.1920x1080.jpg?t=1672856194",
                "https://cdn.akamai.steamstatic.com/steam/apps/924970/ss_547a92327fc6b6f6bec554ec701829d7011854a1.1920x1080.jpg?t=1672856194",
                "https://cdn.akamai.steamstatic.com/steam/apps/924970/ss_cff8429e91cfc960864b0652855a8458e43d476a.1920x1080.jpg?t=1672856194",
                "https://cdn.akamai.steamstatic.com/steam/apps/924970/ss_199c74883c9b599d968c4320766a089f50e782c2.1920x1080.jpg?t=1672856194",
                "https://cdn.akamai.steamstatic.com/steam/apps/924970/ss_547a92327fc6b6f6bec554ec701829d7011854a1.1920x1080.jpg?t=1672856194"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 12,
        title: "Kena: Bridge of Spirits",
        characteristics: {
            genre: ["Action", "Adventure"],
            publisher: "Ember Lab",
            developer: "Ember Lab",
            releaseDate: "2021-09-21"
        },
        sources: {
            image: "https://cdn1.epicgames.com/7c53d7dc86494d5abcdc974b0ef0a843/offer/EGS_KenaBridgeofSpirits_EmberLab_S6-1200x1600-e701bd947727ee14b81626c7f9757e4f.jpg",
            video: "https://www.youtube.com/embed/pWh5388AEHw",
            screenshots: [
                "https://cdn.akamai.steamstatic.com/steam/apps/1954200/ss_52e16ae68eadf382538cdaaa876f58f0e2e9c757.1920x1080.jpg?t=1664298117",
                "https://cdn.akamai.steamstatic.com/steam/apps/1954200/ss_b732caa0f33758a267a12cf2018f5af8eaeb5a45.1920x1080.jpg?t=1664298117",
                "https://cdn.akamai.steamstatic.com/steam/apps/1954200/ss_2fff15db4324815f9365748c91dd618c6cf71b69.1920x1080.jpg?t=1664298117",
                "https://cdn.akamai.steamstatic.com/steam/apps/1954200/ss_ded6a9c622877392edb15be991dd0160abd33135.1920x1080.jpg?t=1664298117",
                "https://cdn.akamai.steamstatic.com/steam/apps/1954200/ss_acdc7b071849012ece36e949f2961c7fd5bfa5da.1920x1080.jpg?t=1664298117",
                "https://cdn.akamai.steamstatic.com/steam/apps/1954200/ss_71dc09e330f9918a1893d39021fdb56fa23beb14.1920x1080.jpg?t=1664298117",
                "https://cdn.akamai.steamstatic.com/steam/apps/1954200/ss_0fa45556419113465967b5fb53ce36cd96647c71.1920x1080.jpg?t=1664298117"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 13,
        title: "Death Stranding Director's Cut",
        characteristics: {
            developer: "Kojima Productions",
            publisher: "Sony Interactive Entertainment",
            releaseDate: "2021-09-24",
            genres: ["Action", "Adventure"]
        },
        sources: {
            image: "https://cdn1.epicgames.com/offer/0a9e3c5ab6684506bd624a849ca0cf39/EGS_DeathStrandingDirectorsCut_KOJIMAPRODUCTIONS_S4_1200x1600-5f99e16507795f9b497716b470cfd876",
            video: "https://www.youtube.com/embed/s2GUQcbz_8Q",
            screenshots: [
                "https://cdn.akamai.steamstatic.com/steam/apps/1850570/ss_f64a1140651ff5af30eb63bb6e5b41753d00a98e.1920x1080.jpg?t=1649438096",
                "https://cdn.akamai.steamstatic.com/steam/apps/1850570/ss_d47bde2e349606b3ef1f641e2d8fb7ccf1adba77.1920x1080.jpg?t=1649438096",
                "https://cdn.akamai.steamstatic.com/steam/apps/1850570/ss_87653eb3d360766a994adccd82767b34961b37a5.1920x1080.jpg?t=1649438096",
                "https://cdn.akamai.steamstatic.com/steam/apps/1850570/ss_0be4ab0e4137c880b1eda9e405a77bc2e3539695.1920x1080.jpg?t=1649438096",
                "https://cdn.akamai.steamstatic.com/steam/apps/1850570/ss_5b02880a924e3abccfad07b3cb28112e9926d65f.1920x1080.jpg?t=1649438096",
                "https://cdn.akamai.steamstatic.com/steam/apps/1850570/ss_95b8f02fd281478626de1ad543a54203459ed5eb.1920x1080.jpg?t=1649438096",
                "https://cdn.akamai.steamstatic.com/steam/apps/1850570/ss_4ce467cf4fc68f0efa4215464c3a7f84de567f47.1920x1080.jpg?t=1649438096",
                "https://cdn.akamai.steamstatic.com/steam/apps/1850570/ss_069e6370c04bdcb4a529b64e51b4eee2c5cc7562.1920x1080.jpg?t=1649438096"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 14,
        title: "Hot Wheels Unleashed",
        characteristics: {
            developer: "Milestone",
            publisher: "Milestone",
            releaseDate: "2021-09-30",
            genres: ["Racing"]
        },
        sources: {
            image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HOTWHEELSUNLEASHED_MilestoneSrl_S2_1200x1600-30ec276e4019296d3efd50d5b6ffe1bc",
            video: "https://www.youtube.com/embed/ahDBttR-J84",
            screenshots: [
                "https://cdn.akamai.steamstatic.com/steam/apps/1271700/ss_a427be278a71718e68a93b32057b41e6e1f333b8.1920x1080.jpg?t=1671034412",
                "https://cdn.akamai.steamstatic.com/steam/apps/1271700/ss_9cae5b5638ccaec588de71f549ba1a87a1c91f54.1920x1080.jpg?t=1671034412",
                "https://cdn.akamai.steamstatic.com/steam/apps/1271700/ss_853992254e15a21e7cd811bf43ad6440815f11b9.1920x1080.jpg?t=1671034412",
                "https://cdn.akamai.steamstatic.com/steam/apps/1271700/ss_1aca5e126ede4d013734192dbe3610fa5484c473.1920x1080.jpg?t=1671034412",
                "https://cdn.akamai.steamstatic.com/steam/apps/1271700/ss_c344b895d8f76a6d8969b31aac109bdc1d92a0f7.1920x1080.jpg?t=1671034412",
                "https://cdn.akamai.steamstatic.com/steam/apps/1271700/ss_21fa10c8e2cc5a7c5a278cadf03bc29f847ec843.1920x1080.jpg?t=1671034412",
                "https://cdn.akamai.steamstatic.com/steam/apps/1271700/ss_654d1a45314e452a16be0ba30060d78c462a41ee.1920x1080.jpg?t=1671034412",
                "https://cdn.akamai.steamstatic.com/steam/apps/1271700/ss_fd1b280d13c905ab925b9ea4d385bfd53a96d250.1920x1080.jpg?t=1671034412"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 15,
        title: "Death's Door",
        characteristics: {
            developer: "Acid Nerve",
            publisher: "Devolver Digital",
            releaseDate: "2021-07-20",
            genres: ["Action", "Adventure"]
        },
        sources: {
            image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DeathsDoor_AcidNerve_S2_1200x1600-fd945c4873fb79d8159af8dfd68e6bcc",
            video: "https://www.youtube.com/embed/NjnEg3ucXpc",
            screenshots: [
                "https://cdn.akamai.steamstatic.com/steam/apps/894020/ss_06150beb6e67c430158f55a5be16cf7a3822e1fa.1920x1080.jpg?t=1648756013",
                "https://cdn.akamai.steamstatic.com/steam/apps/894020/ss_46cbadf5477da2909c9ef5c4539a977314da03e0.1920x1080.jpg?t=1648756013",
                "https://cdn.akamai.steamstatic.com/steam/apps/894020/ss_dd9b5a2e40d3d512d1c978a5dfda5999c458a517.1920x1080.jpg?t=1648756013",
                "https://cdn.akamai.steamstatic.com/steam/apps/894020/ss_83e57d823ecb8559cd3c70cef500b33d4b841787.1920x1080.jpg?t=1648756013",
                "https://cdn.akamai.steamstatic.com/steam/apps/894020/ss_e3daf6b07bb732c199d6be1088bda90f6527dd84.1920x1080.jpg?t=1648756013",
                "https://cdn.akamai.steamstatic.com/steam/apps/894020/ss_931b380e6a36debc084ff61e890ba126ff5157cb.1920x1080.jpg?t=1648756013",
                "https://cdn.akamai.steamstatic.com/steam/apps/894020/ss_65e1e8a0dbc3a8c6f8c46efb82db532b5baf1047.1920x1080.jpg?t=1648756013"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 16,
        title: "Jurassic World Evolution 2",
        characteristics: {
            developer: "Frontier Developments",
            publisher: "Frontier Developments",
            releaseDate: "2021-11-09",
            genres: ["Simulation"]
        },
        sources: {
            image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_JurassicWorldEvolution2_FrontierDevelopments_S6_1200x1600-56055d1e93c502852ccc0f9578094e5d",
            video: "https://www.youtube.com/embed/g76Zx7zydXQ",
            screenshots: [
                "https://cdn.akamai.steamstatic.com/steam/apps/1244460/ss_e2043f89661bf4da80628e6ab1e97b0a67f1c7ed.1920x1080.jpg?t=1680174609",
                "https://cdn.akamai.steamstatic.com/steam/apps/1244460/ss_f22feb0cee0172cd3b9d1b6c845b90d911ee8858.1920x1080.jpg?t=1680174609",
                "https://cdn.akamai.steamstatic.com/steam/apps/1244460/ss_7e846b4fd5cb5a3346db12a87e856fab284f92ce.1920x1080.jpg?t=1680174609",
                "https://cdn.akamai.steamstatic.com/steam/apps/1244460/ss_ea9e6dac291587e61650a11791cd0a493be635cb.1920x1080.jpg?t=1680174609",
                "https://cdn.akamai.steamstatic.com/steam/apps/1244460/ss_07e3315833ed65b2c968214c617e6bbbea514654.1920x1080.jpg?t=1680174609",
                "https://cdn.akamai.steamstatic.com/steam/apps/1244460/ss_30300bd64f04746dbfdd9de44ae3e209aaae0510.1920x1080.jpg?t=1680174609",
                "https://cdn.akamai.steamstatic.com/steam/apps/1244460/ss_c78eddae3abebf2fadcf02dd72219e1bb9041406.1920x1080.jpg?t=1680174609",
                "https://cdn.akamai.steamstatic.com/steam/apps/1244460/ss_96527037800b404246c4e508062c925eabae20a6.1920x1080.jpg?t=1680174609"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 17,
        title: "Life is Strange: True Colors",
        characteristics: {
            developer: "Deck Nine",
            publisher: "Square Enix",
            releaseDate: "2021-09-10",
            genres: ["Adventure"]
        },
        sources: {
            image: "https://upload.wikimedia.org/wikipedia/en/e/e4/Life_Is_Strange_-_True_Colors.png",
            video: "https://www.youtube.com/embed/PNt1aSkYfWk",
            screenshots: [
                "https://cdn.akamai.steamstatic.com/steam/apps/936790/ss_57a8d1468ecbd7fe2f9629b024dd41ba33187148.1920x1080.jpg?t=1666713640",
                "https://cdn.akamai.steamstatic.com/steam/apps/936790/ss_a4a96173729e2b5f25c3d42098678b07f742b41e.1920x1080.jpg?t=1666713640",
                "https://cdn.akamai.steamstatic.com/steam/apps/936790/ss_acd749a4cdf9aa8d9f31052d33e4d47d621ea66a.1920x1080.jpg?t=1666713640",
                "https://cdn.akamai.steamstatic.com/steam/apps/936790/ss_9f0dc678345ca808372ea4e0af1349ce4154cdef.1920x1080.jpg?t=1666713640"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 18,
        title: "Little Nightmares 2",
        characteristics: {
            developer: "Tarsier Studios",
            publisher: "Bandai Namco Entertainment",
            releaseDate: "2021-02-11",
            genres: ["Puzzle", "Platformer"]
        },
        sources: {
            image: "https://cdn-prod.scalefast.com/resize/400x-/public/assets/user/6562614/image/29035d40c2fc3f2cdf3adea7a8e1ecba.jpg",
            video: "https://www.youtube.com/embed/1zGukyRuHXY",
            screenshots: [
                "https://cdn.akamai.steamstatic.com/steam/apps/860510/ss_a82b81f501ea727aaae5ef4a78cae7974a7179bc.1920x1080.jpg?t=1676858317",
                "https://cdn.akamai.steamstatic.com/steam/apps/860510/ss_0edccb29aa20a69cb5ac55ca1a6c6e8a5eb6428d.1920x1080.jpg?t=1676858317",
                "https://cdn.akamai.steamstatic.com/steam/apps/860510/ss_c31ac7317c0d81cbffb813fb3cf3c8e349d9d235.1920x1080.jpg?t=1676858317",
                "https://cdn.akamai.steamstatic.com/steam/apps/860510/ss_a17e682e91c93695f2855be46428c4fc04c997f3.1920x1080.jpg?t=1676858317",
                "https://cdn.akamai.steamstatic.com/steam/apps/860510/ss_a2f4c8ad95844656764d6b7d3a033fc787e82144.1920x1080.jpg?t=1676858317",
                "https://cdn.akamai.steamstatic.com/steam/apps/860510/ss_a88d324aa6e2647521ff6fc55784843752215a9c.1920x1080.jpg?t=1676858317",
                "https://cdn.akamai.steamstatic.com/steam/apps/860510/ss_fa043ec9f1f044e57085bbff9b5200d60fa05d91.1920x1080.jpg?t=1676858317"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 19,
        title: "Outriders",
        characteristics: {
            developer: "People Can Fly",
            publisher: "Square Enix",
            releaseDate: "April 1, 2021",
            genres: ["Shooter", "RPG"]
        },
        sources: {
            image: "https://upload.wikimedia.org/wikipedia/ru/3/3b/Outriders_%28game%29.jpg",
            video: "https://www.youtube.com/embed/8iQnuJxfj-c",
            screenshots: [
                "https://cdn.akamai.steamstatic.com/steam/apps/680420/ss_a79dac551483867e0414efcacc2d07a0fb76063f.1920x1080.jpg?t=1657806851",
                "https://cdn.akamai.steamstatic.com/steam/apps/680420/ss_090225330f1ebd6f622b35b48fc25132a823c5d6.1920x1080.jpg?t=1657806851",
                "https://cdn.akamai.steamstatic.com/steam/apps/680420/ss_c0ea37459f5e3c754f21d42d6bf375dfbdd075de.1920x1080.jpg?t=1657806851",
                "https://cdn.akamai.steamstatic.com/steam/apps/680420/ss_15e7b2be454a94b5c79aafec04c55fd47f683fa2.1920x1080.jpg?t=1657806851",
                "https://cdn.akamai.steamstatic.com/steam/apps/680420/ss_3cedb1e6476556a0629efbea796a682e423baf68.1920x1080.jpg?t=1657806851",
                "https://cdn.akamai.steamstatic.com/steam/apps/680420/ss_9a6aa87efda1b9507a38d268aec5bc3dc0dd39d0.1920x1080.jpg?t=1657806851",
                "https://cdn.akamai.steamstatic.com/steam/apps/680420/ss_db8e991206587eb2cdfd961aeb696f2ca20e820d.1920x1080.jpg?t=1657806851"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 20,
        title: "Psychonauts 2",
        characteristics: {
            developer: "Double Fine Productions",
            publisher: "Xbox Game Studios",
            releaseDate: "August 25, 2021",
            genres: ["Platformer", "Action-adventure"]
        },
        sources: {
            image: "https://s2.gaming-cdn.com/images/products/4798/orig-fallback-v1/psychonauts-2-pc-mac-game-steam-cover.jpg?v=1650985364",
            video: "https://www.youtube.com/embed/liJTZfJhOcs",
            screenshots: [
                "https://cdn.akamai.steamstatic.com/steam/apps/607080/ss_d78da4dbc35620193f7c14e0e5e68f7020adfd43.1920x1080.jpg?t=1678138254",
                "https://cdn.akamai.steamstatic.com/steam/apps/607080/ss_1b76e40ca9d92bfe8a51ec0603460641229676d4.1920x1080.jpg?t=1678138254",
                "https://cdn.akamai.steamstatic.com/steam/apps/607080/ss_1fca58dd7904427261233413a1232320d6c3f005.1920x1080.jpg?t=1678138254",
                "https://cdn.akamai.steamstatic.com/steam/apps/607080/ss_ee2375942ad59bb2027fc5a845bad9936b788b6e.1920x1080.jpg?t=1678138254",
                "https://cdn.akamai.steamstatic.com/steam/apps/607080/ss_1bc213c36d41e88819efff1b59854296d9d0a743.1920x1080.jpg?t=1678138254",
                "https://cdn.akamai.steamstatic.com/steam/apps/607080/ss_ac7d51dd9299eb680d1674dfe5934d70370b3dea.1920x1080.jpg?t=1678138254",
                "https://cdn.akamai.steamstatic.com/steam/apps/607080/ss_1b156e3250ef88e8a561c43e99a62cbbf5c6f26f.1920x1080.jpg?t=1678138254"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    },
    {
        id: 21,
        title: "Riders Republic",
        characteristics: {
            developer: "Ubisoft Annecy",
            publisher: "Ubisoft",
            releaseDate: "October 28, 2021",
            genres: ["Sports"]
        },
        sources: {
            image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EN_MAD_STD_GAME_EPIC_Store_Portrait_1200x1600_EN_1200x1600-ddd4f456e3035ce50ddfa0d358efa208",
            video: "https://www.youtube.com/embed/pqiGmaXiSDo",
            screenshots: [
                "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6slI1F16TphazzYNlyHP4n/a8fdb495642078cd2daed4fab60edb26/MPP_JamSessions_desktop-V3.jpg",
                "https://sm.ign.com/ign_nordic/gallery/r/riders-rep/riders-republic-gamescom-2021-screenshots_s1et.jpg",
                "https://venturebeat.com/wp-content/uploads/2021/11/Riders-Republic-3.jpg?fit=1901%2C1047&strip=all"
            ]
        },
        isSold: false,
        salary: 20000,
        discount: 10
    }
]

if (!localStorage.getItem("games")) {
    localStorage.setItem("games", JSON.stringify(games))
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("games")))
        }, 2000)
    })
const getByTitle = (title) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const games = JSON.parse(localStorage.getItem("games"))
            resolve(games.find((game) => game.title === title))
        }, 1000)
    })
const update = (id, data) =>
    new Promise((resolve) => {
        console.log(data)
        console.log(id)
        const games = JSON.parse(localStorage.getItem("games"))
        const gameIndex = games.findIndex((g) => g.id === id)
        console.log({ ...games[gameIndex], ...data })
        games[gameIndex] = { ...data, ...games[gameIndex] }
        console.log(games[gameIndex])
        localStorage.setItem("games", JSON.stringify(games))
        // console.log(games)
        resolve(games[gameIndex])
    })
export default {
    fetchAll,
    getByTitle,
    update
}
