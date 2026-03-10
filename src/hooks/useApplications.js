import { useEffect, useState, useCallback } from "react";
import * as appService from "../services/application-service.js";

export default function useApplications(filters) {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApps = useCallback(async () => {
    setLoading(true);
    try {
      const res = await appService.getApplications(filters);
      setApps(res.data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [JSON.stringify(filters)]);

  const create = async (data) => {
    try {
      await appService.createApplication(data);
      await fetchApps();
    } catch (error) {
      throw error;
    }
  };

  const update = async (id, data) => {
    try {
      await appService.updateApplication(id, data);
      await fetchApps();
    } catch (error) {
      throw error;
    }
  };

  const remove = async (id) => {
    try {
      await appService.deleteApplication(id);
      await fetchApps();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchApps();
  }, [fetchApps]);

  return { apps, loading, create, update, remove, fetchApps };
}