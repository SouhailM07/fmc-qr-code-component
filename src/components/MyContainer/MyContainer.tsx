import "./mycontainer.css";
// mui
import { Card, CardMedia, CardContent, CardHeader } from "@mui/material";

import img from "/image-qr-code.png";

export default function MyContainer() {
  return (
    <>
      <main className="h-screen !flex items-center justify-center bg-LightGray">
        <Card className="max-w-[23rem] flex flex-col items-center text-center !bg-White py-[1.2rem] !rounded-2xl">
          <CardMedia
            component="div"
            image={img}
            className="h-[20rem] w-[20rem] rounded-xl"
          />
          <CardHeader
            className="!py-0 !pt-3"
            title={
              <p className="!font-bold text-[1.5rem] text-DarkBlue mt-3">
                Improve your front-end skills by building projects
              </p>
            }
          />
          <CardContent
            component="p"
            className="text-GrayishBlue !px-10 text-[1.1rem] "
          >
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </CardContent>
        </Card>
      </main>
    </>
  );
}
