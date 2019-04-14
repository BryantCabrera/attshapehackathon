import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Games.css"

export default class Games extends Component {
    render() {
        return (

            <div class="container">
                <div class="dashboard__game-grid--1-0">
                    <Link to='/live-match'>
                        <img
                            className="dashboard__game--pictures1"
                            alt="League of Legends"
                            src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-188x250.jpg"
                        />
                    </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">League of Legends</p>
                        <p className="dashboard__game--viewersamount">106.2k Viewers</p>
                        <p>$126,696 Bet Volume</p>
                    </div>

                </div>
                <div class="dashboard__game-grid--1-4">
                    <Link to='/live-match'>
                        <img
                            className="dashboard__game--pictures1"
                            alt="Grand Theft Auto 5"
                            src="https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-285x380.jpg"
                        />
                    </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">Grand Theft Auto 5</p>
                        <p className="dashboard__game--viewersamount">86.2k Viewers</p>
                        <p>$90,696 Bet Volume</p>
                    </div>

                </div>
                <div class="dashboard__game-grid--1-7">
                    <Link to='/live-match'>
                        <img
                            className="dashboard__game--pictures1"
                            alt="League of Legends"
                            src="https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg"
                        />
                    </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">Fortnite</p>
                        <p className="dashboard__game--viewersamount">76.2k Viewers</p>
                        <p>$126,696 Bet Volume</p>
                    </div>
                </div>
                <div class="dashboard__game-grid--1-10">
                    <Link to='/live-match'>
                        <img
                            className="dashboard__game--pictures1"
                            alt="Fortnite"
                            src="https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-285x380.jpg"
                        />
                    </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">Hearthstone</p>
                        <p className="dashboard__game--viewersamount">56.2k Viewers</p>
                        <p>$46,696 Bet Volume</p>
                    </div>
                </div>
                <div class="dashboard__game-grid--1-13">
                    <Link to='/live-match'>
                        <img
                            className="dashboard__game--pictures1"
                            alt="League of Legends"
                            src="https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-285x380.jpg"
                        />
                    </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">Overwatch</p>
                        <p className="dashboard__game--viewersamount">55.2k Viewers</p>
                        <p>$16,696 Bet Volume</p>
                    </div>
                </div>
                <div class="dashboard__game-grid--1-16">
                    <Link to='/live-match'>
                        <img
                            className="dashboard__game--pictures1"
                            alt="League of Legends"
                            src="https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg"
                        />
                    </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">Apex Legends</p>
                        <p className="dashboard__game--viewersamount">46.2k Viewers</p>
                        <p>$126,696 Bet Volume</p>
                    </div>
                </div>
                <div class="dashboard__game-grid--1-2">
                    <Link to='/live-match'>
                        <img
                            className="dashboard__game--pictures1"
                            alt="League of Legends"
                            src="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-285x380.jpg"
                        />
                    </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">Dota 2</p>
                        <p className="dashboard__game--viewersamount">40.9k Viewers</p>
                        <p>$126,696 Bet Volume</p>
                    </div>
                </div>
                <div class="dashboard__game-grid--1-5">
                    <Link to='/live-match'>
                        <img
                            className="dashboard__game--pictures1"
                            alt="League of Legends"
                            src="https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-285x380.jpg"
                        />
                    </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">World of Warcraft</p>
                        <p className="dashboard__game--viewersamount">30.1k Viewers</p>
                        <p>$126,696 Bet Volume</p>
                    </div>
                </div>
                <div class="dashboard__game-grid--1-8"><Link to='/live-match'>
                    <img
                        className="dashboard__game--pictures1"
                        alt="League of Legends"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Auto%20Chess-285x380.jpg"
                    />
                </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">Auto Chess</p>
                        <p className="dashboard__game--viewersamount">76.2k Viewers</p>
                        <p>$126,696 Bet Volume</p>
                    </div>
                </div>
                <div class="dashboard__game-grid--1-11">
                    <Link to='/live-match'>
                        <img
                            className="dashboard__game--pictures1"
                            alt="League of Legends"
                            src="https://static-cdn.jtvnw.net/ttv-boxart/Magic:%20The%20Gathering-285x380.jpg"
                        />
                    </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">Magic: The Gathering</p>
                        <p className="dashboard__game--viewersamount">76.2k Viewers</p>
                        <p>$126,696 Bet Volume</p>
                    </div>
                </div>
                <div class="dashboard__game-grid--1-14">
                    <Link to='/live-match'>
                        <img
                            className="dashboard__game--pictures1"
                            alt="League of Legends"
                            src="https://static-cdn.jtvnw.net/ttv-boxart/Rocket%20League-285x380.jpg"
                        />
                    </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">Rocket League</p>
                        <p className="dashboard__game--viewersamount">76.2k Viewers</p>
                        <p>$126,696 Bet Volume</p>
                    </div>
                </div>
                <div class="dashboard__game-grid--1-17">
                    <Link to='/live-match'>
                        <img
                            className="dashboard__game--pictures1"
                            alt="League of Legends"
                            src="https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-285x380.jpg"
                        />
                    </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">Minecraft</p>
                        <p className="dashboard__game--viewersamount">2.2k Viewers</p>
                        <p>$126,696 Bet Volume</p>
                    </div>
                </div>
                <div class="dashboard__game-grid--1-3">
                    <Link to='/live-match'>
                        <img
                            className="dashboard__game--pictures1"
                            alt="League of Legends"
                            src="https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-285x380.jpg"
                        />
                    </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">Starcraft 2</p>
                        <p className="dashboard__game--viewersamount">76.2k Viewers</p>
                        <p>$126,696 Bet Volume</p>
                    </div>
                </div>
                <div class="dashboard__game-grid--1-6">
                    <Link to='/live-match'>
                        <img
                            className="dashboard__game--pictures1"
                            alt="League of Legends"
                            src="https://static-cdn.jtvnw.net/ttv-boxart/Heroes%20of%20the%20Storm-285x380.jpg"
                        />
                    </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">Heroes of the Storm</p>
                        <p className="dashboard__game--viewersamount">76.2k Viewers</p>
                        <p>$126,696 Bet Volume</p>
                    </div>
                </div>
                <div class="dashboard__game-grid--1-9"><Link to='/live-match'>
                    <img
                        className="dashboard__game--pictures1"
                        alt="League of Legends"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Smite-285x380.jpg"
                    />
                </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">Smite</p>
                        <p className="dashboard__game--viewersamount">6.2k Viewers</p>
                        <p>$126,696 Bet Volume</p>
                    </div>
                </div>
                <div class="dashboard__game-grid--1-12">
                    <Link to='/live-match'>
                        <img
                            className="dashboard__game--pictures1"
                            alt="League of Legends"
                            src="https://static-cdn.jtvnw.net/ttv-boxart/Tekken%207-285x380.jpg"
                        />
                    </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">Tekken 7</p>
                        <p className="dashboard__game--viewersamount">5.2k Viewers</p>
                        <p>$126,696 Bet Volume</p>
                    </div>
                </div>
                <div class="dashboard__game-grid--1-15"><Link to='/live-match'>
                    <img
                        className="dashboard__game--pictures1"
                        alt="League of Legends"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/NBA%202K19-285x380.jpg"
                    />
                </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">NBA 2K19</p>
                        <p className="dashboard__game--viewersamount">1.2k Viewers</p>
                        <p>$126,696 Bet Volume</p>
                    </div>
                </div>
                <div class="dashboard__game-grid--1-18"><Link to='/live-match'>
                    <img
                        className="dashboard__game--pictures1"
                        alt="League of Legends"
                        src="https://static-cdn.jtvnw.net/ttv-boxart/Super%20Smash%20Bros.%20Melee-285x380.jpg"
                    />
                </Link>
                    <div className="dashboard__game--stats">
                        <p className="dashboard__game--title">Super Smash Bros</p>
                        <p className="dashboard__game--viewersamount">76.2k Viewers</p>
                        <p>$126,696 Bet Volume</p>
                    </div>
                </div>
            </div>
        )
    }
}
