import { useQuery } from '@tanstack/react-query';
import { getAllPoints, getCompanyPoints, getCompanyRoads } from '../../lib/api';
import { useMemo } from 'react';
import MapView from './MapView';
import { mapTerrain } from '../../assets/map';

interface CompanyMapProps {
  companyIds: number[];
  paths?: number[][];
}
const CompanyMap = ({ companyIds, paths }: CompanyMapProps) => {
  const allPointsQuery = useQuery({
    queryKey: ['allPoints'],
    queryFn: getAllPoints,
    refetchOnMount: true,
  });

  const companyPointsQuery = useQuery({
    queryKey: ['companyPoints'],
    queryFn: async () => {
      const results = await Promise.all(companyIds.map((id) => getCompanyPoints(id)));
      return results.flat();
    },
    refetchOnMount: true,
  });

  const companyRoadsQuery = useQuery({
    queryKey: ['companyRoads'],
    queryFn: async () => {
      const results = await Promise.all(companyIds.map((id) => getCompanyRoads(id)));
      return results.flat();
    },
    refetchOnMount: true,
  });

  const mapPoints = useMemo(() => {
    if (!allPointsQuery.data || !companyPointsQuery.data) return undefined;

    return allPointsQuery.data.map(
      (point) =>
        companyPointsQuery.data!.find((companyPoint) => companyPoint.id === point.id) ?? point,
    );
  }, [allPointsQuery.data, companyPointsQuery.data]);

  return (
    <MapView terrain={mapTerrain} points={mapPoints} roads={companyRoadsQuery.data} paths={paths} />
  );
};
export default CompanyMap;
