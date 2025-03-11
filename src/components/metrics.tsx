import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Metric {
  label: string;
  value: number;
  suffix?: string;
}

const metrics: Metric[] = [
  { label: "Beneficiaries", value: 200, suffix: "+" },
  { label: "Scholarships", value: 100, suffix: "+" },
  { label: "Community Projects", value: 5, suffix: "+" },
  { label: "Partners", value: 10, suffix: "+" },
];

const Metrics = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3
      });

  return (
    <div ref={ref} className="w-full py-12 text-[#be202f] mt-5 font-Montserrat">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center">
            {inView && (
              <CountUp
                start={0}
                end={metric.value}
                duration={2.5}
                separator=","
                suffix={metric.suffix}
                className="text-4xl font-bold"
              />
            )}
            <p className="mt-2">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
