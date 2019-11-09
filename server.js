const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const axios = require("axios");
const api = axios.create({
  baseURL: process.env.API_BASE_URL
});

app.get("/path", async function(req, res) {
  try {
    const resApi = await api.get("/path");

    res.send(resApi.data);
  } catch (err) {
    console.error(err);
  }
});

app.get("/path", async function(req, res) {
  try {
    const resApi = await api.get("/path");

    res.send(resApi.data);
  } catch (err) {
    console.error(err);
  }
});

app.get("/path/:id", async function(req, res) {
  try {
    const id = req.params.id;
    const resApi = await api.get(`/path/${id}`);

    res.send(resApi.data);
  } catch (err) {
    res.status(err.response.data.statusCode).send(err.response.data);
    console.error(err);
  }
});

app.get("/path/:page?", async function(req, res) {
  try {
    const page = req.params.page;
    let resApi;

    if (page) {
      resApi = await api.get(`/path/${page}`);
    } else {
      resApi = await api.get("/path");
    }

    res.send(resApi.data);
  } catch (err) {
    console.error(err);
  }
});

app.get("/path/:id", async function(req, res) {
  try {
    const id = req.params.id;
    const resApi = await api.get(`/path/${id}`);

    res.send(resApi.data);
  } catch (err) {
    res.status(err.response.data.statusCode).send(err.response.data);
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
    res.status(err.response.data.statusCode).send(err.response.data);
    console.error(err);
  }
});

app.get("/user", async function(req, res) {
  try {
    const resApi = await api.get("/api/user");

    res.send(resApi.data);
  } catch (err) {
    console.error(err);
  }
});

app.listen(3333);
