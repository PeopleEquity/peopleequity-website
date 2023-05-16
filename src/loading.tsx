import { CSSProperties } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

const override: CSSProperties = {
  display: 'block',
  margin: 'auto',
  borderColor: '#fff',
};

export default function Loading() {
  return (
    <div className="h-[7.5rem] text-center pt-[3rem]">
      <ScaleLoader
        color="#fff"
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
