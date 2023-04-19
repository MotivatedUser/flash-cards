export const formatText = (text) => {
    return text
      .split('\n')
      .map((line, index) => (
        <p key={index} style={{ marginBottom: '0.5em' }}>
          {line}
        </p>
      ));
  };
  