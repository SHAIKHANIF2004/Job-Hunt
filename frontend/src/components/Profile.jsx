import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Contact, Mail, Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "@radix-ui/react-label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const isResume = true;

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={
                  `${user?.profile?.profilePhoto}` ||
                  "https://tse2.mm.bing.net/th/id/OIP.I0HgIIGDG_usTSrQ1rlhagHaHP?pid=Api&P=0&h=180"
                }
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-bold text-xl">{user?.fullname}</h1>
              <p className="font-medium text-gray-600">{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className="text-right"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-4  my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-4  my-2">
            <Contact />
            <span className="underline">{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-md font-medium mb-2">Skills</h1>{" "}
          <div className="flex items-center gap-2">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, idx) => (
                <Badge key={idx}>{item}</Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <Label className="font-bold text-md">Resume</Label>
          {isResume ? (
            <a
              href={`${user?.profile?.resume}`}
              target="blank"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
