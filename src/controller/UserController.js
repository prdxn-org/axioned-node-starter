export const GetUserData = (req, res) => {
  try {
    return res.status(200).send('OK!');
  } catch (error) {
    return res.status(500).send('Not OK!');
  }
};

export const updateUserData = (req, res) => {
  try {
    return res.status(201).send('Updated');
  } catch (error) {
    return res.status(500).send('Not updated');
  }
};
