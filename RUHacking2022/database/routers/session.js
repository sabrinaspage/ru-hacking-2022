const express = require('express');
const router = express.Router();
const speech = require('@google-cloud/speech');
const fs = require('fs');
const fsExtra = require('fs-extra');
const multer = require('multer');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

//CockroachDB
const Pool = require('pg').Pool;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({storage: storage});

const gcpStorage = new Storage({
  projectId: 'moonbight-mom-351432',
  keyFilename: './credentials/moonbight-mom-351432-08460d392cea.json',
});

// get all patient data
router.get('/', (req, res) => {
  pool.query('SELECT * FROM patient_data', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});

// get patient data with patient data id
router.get('/data/:patient_data_id', (req, res) => {
  const patient_data_id = req.params.patient_data_id || '';

  pool.query(
    'SELECT * FROM patient_data WHERE id = $1',
    [patient_data_id.toString()],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(results.rows);
    },
  );
});

// get patient data with patient id
router.get('/:patient_id', (req, res) => {
  const patient_id = req.params.patient_id || '';

  pool.query(
    'SELECT * FROM patient_data WHERE patient_id = $1',
    [patient_id.toString()],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(results.rows);
    },
  );
});
