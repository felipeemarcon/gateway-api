const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const axios = require("axios");
const api = axios.create({
  baseURL: "http://dev.gamersclub.com.br/api/gamesacademy"
});

app.get("/init", async function(req, res) {
  try {
    const resApi = await api.get("/init");

    res.send(resApi.data);
  } catch (err) {
    console.error(err);
  }
});

app.get("/home", async function(req, res) {
  try {
    const resApi = await api.get("/home");

    res.send(resApi.data);
  } catch (err) {
    console.error(err);
  }
});

app.get("/serie/:id", async function(req, res) {
  try {
    const serieId = req.params.id;
    const resApi = await api.get(`/serie/${serieId}`);

    res.send(resApi.data);
  } catch (err) {
    res.status(404).send(err.response.data);
    console.error(err);
  }
});

app.get("/episodes/:page?", async function(req, res) {
  try {
    const page = req.params.page;
    let resApi;

    if (page) {
      resApi = await api.get(`/episodes/${page}`);
    } else {
      resApi = await api.get("/episodes");
    }

    res.send(resApi.data);
  } catch (err) {
    console.error(err);
  }
});

app.get("/current/:id", async function(req, res) {
  try {
    const lessonId = req.params.id;
    const resApi = await api.get(`/current/${lessonId}`);

    res.send(resApi.data);
  } catch (err) {
    res.status(404).send(err.response.data);
    console.error(err);
  }
});

app.get("/search", async function(req, res) {
  try {
    const params = req.query.q;
    if (params == undefined || params == "") {
      res.status(400).send("No search");
    } else {
      resApi = await api.get(`/search?q=${params}`);
      res.send(resApi.data);
    }
  } catch (err) {
    console.error(err);
  }
});

app.listen(3333);
