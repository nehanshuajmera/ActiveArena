import { useEffect, useState } from "react";
import axios from "axios";
import "./homepage.styles.scss";

export const HomePage = () => {
  const [workouts, setWorkouts] = useState([]);

  const getWorkoutData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/workouts/");
      setWorkouts(response.data);
    } catch (err) {
      console.error(`Error fetching data ${err}`);
    }
  };

  useEffect(() => {
    getWorkoutData();
  }, []);

  return (
    <div className="homepage">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => <h2 key={workout._id}>{workout.title}</h2>)}
      </div>
    </div>
  );
};
