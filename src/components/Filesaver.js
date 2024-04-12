// saves files from my resume pdf

const saveFile = () => {
    fileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + "/resources/Resume.pdf",
      "Resume.pdf"
    );
};