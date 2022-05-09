const Workout = require("../database/Workout");
const { v4: uuid } = require("uuid");

const getAllWorkouts = (filterParams) => {
  try {
    return Workout.getAllWorkouts(filterParams);
  } catch (error) {
    throw error;
  }
};

const getOneWorkout = (workoutId) => {
  try {
    return Workout.getOneWorkout(workoutId);
  } catch (error) {
    throw error;
  }
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  try {
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);

    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

const updateOneWorkout = (workoutId, changes) => {
  try {
    return Workout.updateOneWorkout(workoutId, changes);
  } catch (error) {
    throw error;
  }
};

const deleteOneWorkout = (workoutId) => {
  try {
    return Workout.deleteOneWorkout(workoutId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
