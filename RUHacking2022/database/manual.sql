CREATE TABLE patient_data (
    patient_id SERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    BPM TEXT NOT NULL,
    heart_rate TEXT NOT NULL
);