import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { ProfileSideBar } from "~/components/profile-sidebar/profile-sidebar";

export default function Profile() {
  return (
    <Container disableGutters maxWidth='xl'>
      <Grid2 className="grow h-full" container>
        <Grid2 md={4} xs={12} className="lift-effect bg-amber-100">
          <ProfileSideBar />
        </Grid2>
        <Grid2 md={8} xs={12} className="lift-effect bg-green-200">b</Grid2>
      </Grid2>
    </Container>
  );
}
