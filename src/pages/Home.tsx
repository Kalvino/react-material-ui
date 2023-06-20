import { ReactElement, FC, useState } from "react";
import { Box, Typography } from "@mui/material";

const Home: FC<any> = (): ReactElement => {
  const [flavours, setFlavours] = useState<string[]>([]);

  const handleChange = (event: any) => {
    const flav: string = event.target.value;
    if (flavours.includes(flav)) return;
    setFlavours((oldArray: any) => [...oldArray, flav]);
  }

  const handleSubmit = (event: any) => {
    alert(flavours);
    console.log(flavours);
    event.preventDefault();
  }

  return (
    <Box sx={{
      flexGrow: 1,
      backgroundColor: 'whitesmoke',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Typography variant="h6">
        Home
      </Typography>

      {/* <form onSubmit={handleSubmit} >
        <label>
          Pick your favorite flavors:
          <select multiple={true} value={flavours} onChange={handleChange}  >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form> */}
    </Box>
  );
};

export default Home;