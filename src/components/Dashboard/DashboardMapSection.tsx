import { useQuery } from '@tanstack/react-query';
import { useUser } from '../../lib/auth';
import { getAllPoints, getCompanyPoints, getCompanyRoads } from '../../lib/api';
import { useEffect, useMemo } from 'react';
import MapView from '../Map/MapView';
import { mapTerrain } from '../../assets/map';

const DashboardMap = () => {
  const user = useUser({ retry: 1, retryDelay: 100 });

  const allPointsQuery = useQuery({
    queryKey: ['allPoints'],
    queryFn: getAllPoints,
    refetchOnMount: true,
  });

  const companyPointsQuery = useQuery({
    queryKey: ['companyPoints'],
    queryFn: () => (user.data ? getCompanyPoints(user.data.id) : undefined),
    refetchOnMount: true,
  });

  const companyRoadsQuery = useQuery({
    queryKey: ['companyRoads'],
    queryFn: () => (user.data ? getCompanyRoads(user.data.id) : undefined),
    refetchOnMount: true,
  });

  const mapPoints = useMemo(() => {
    if (!allPointsQuery.data || !companyPointsQuery.data) return undefined;

    return allPointsQuery.data.map(
      (point) =>
        companyPointsQuery.data!.find((companyPoint) => companyPoint.id === point.id) ?? point,
    );
  }, [allPointsQuery.data, companyPointsQuery.data]);

  useEffect(() => {
    if (user.data) allPointsQuery.refetch();
  }, [user.data, allPointsQuery]);

  useEffect(() => {
    if (user.data) companyPointsQuery.refetch();
  }, [user.data, companyPointsQuery]);

  useEffect(() => {
    if (user.data) companyRoadsQuery.refetch();
  }, [user.data, companyRoadsQuery]);

  return <MapView terrain={mapTerrain} points={mapPoints} roads={companyRoadsQuery.data} />;
};
export default DashboardMap;
