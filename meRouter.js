const express = require('express');
const meRouter = express.Router();
const fs = require("fs");
const SpotifyWebApi = require("spotify-web-api-node");

//GET MY PROFILE DATA
meRouter.route('/').get(async function getMyData(req, res) {
  try {
    const {access_token} = req.query
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(access_token);
    const me = await spotifyApi.getMe();
    // console.log(me.body);
    res.json(me);
  } catch {
    console.error(e);
  }
});