import { useRecordContext, FieldProps } from "react-admin";
import LaunchIcon from "@material-ui/icons/Launch";

import { useStyles } from "./styles";

export const MyUrlField = ({ source }: FieldProps) => {
  const record = useRecordContext();
  const classes = useStyles();

  if (!source || !record) return null;

  return (
    <a href={record[source]} className={classes.link}>
      {record[source]}
      <LaunchIcon className={classes.icon} />
    </a>
  );
};
