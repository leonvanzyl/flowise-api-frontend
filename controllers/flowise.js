export const createPrediction = async (req, res) => {
  const { message } = req.body;
  console.log(message);

  try {
    // Call the Flowise API endpoint here..
    const flowiseData = {
      question: message,
    };

    res.status(200).json({ message: "Demo Response" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
