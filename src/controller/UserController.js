const GetUserData = (req, res) => {
  try {
    return res.status(200).send('OK!');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Not OK!');
  }
};

export default GetUserData;
