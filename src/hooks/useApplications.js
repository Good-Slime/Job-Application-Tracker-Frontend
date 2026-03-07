import { useEffect, useState } from "react";
import * as appService from "../services/application-service.js";

export default function useApplications(filters) {
  const [apps, setApps] = useState([]);

  const fetchApps = async () => {
    const res = await appService.getApplications(filters);
    setApps(res.data.data);
  };

  const create = async (data) => {
    await appService.createApplication(data);
    fetchApps();
  };

  const update = async (id, data) => {
    await appService.updateApplication(id, data);
    fetchApps();
  };

  useEffect(() => {
    fetchApps();
  }, [JSON.stringify(filters)]);

  const remove = async (id) => {
    await appService.deleteApplication(id);
    fetchApps();
  };

  return { apps,create , update, fetchApps, remove };
}