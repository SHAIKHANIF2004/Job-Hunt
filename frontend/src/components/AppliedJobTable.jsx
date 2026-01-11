import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AppliedJobTable = () => {
  const navigate = useNavigate();
  const { allAppliedJobs } = useSelector((store) => store.job);

  return (
    <div>
      {allAppliedJobs?.length <= 0 ? (
        <span className="flex items-center">
          You haven't applied any job yet.{" "}
          <span
            onClick={() => navigate("/jobs")}
            className="text-blue-600 cursor-pointer"
          >
            Apply here
          </span>
        </span>
      ) : (
        <Table>
          <TableCaption>A list of your applied jobs</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Job Role</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allAppliedJobs?.length > 0 &&
              allAppliedJobs?.map((item) => (
                <TableRow key={item?._id}>
                  <TableCell>{item?.createdAt?.split("T")[0]}</TableCell>
                  <TableCell>{item?.job?.title}</TableCell>
                  <TableCell>{item?.job?.company?.name}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      className={`${
                        item?.status === "rejected"
                          ? "bg-red-800"
                          : item?.status === "accepted"
                          ? "bg-green-800"
                          : "bg-gray-800"
                      }`}
                    >
                      {item?.status.toUpperCase()}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default AppliedJobTable;
