import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => (
  <Card>
    <h1 className="text-3xl font-bold mb-4 text-white">
      Welcome to the Task App
    </h1>
    <p className="mb-4">
      This is a React + Tailwind CSS project for managing tasks and viewing API
      data.
    </p>
    <Link to="/tasks">
      <Button variant="primary" size="md">
        Go to Task Manager
      </Button>
    </Link>
  </Card>
);

export default Home;
