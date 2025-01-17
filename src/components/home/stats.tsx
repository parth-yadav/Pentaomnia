"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"

interface StatItemProps {
  label: string
  value: number
  suffix?: string
  delay: number
}

const StatItem: React.FC<StatItemProps> = ({ label, value, suffix = "", delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center p-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: delay + 0.2 }}
        className="text-4xl font-bold text-primary mb-2"
      >
        {inView ? (
          <CountUp
            start={0}
            end={value}
            duration={2.5}
            separator=","
            suffix={suffix}
            useEasing={true}
            decimals={value % 1 === 0 ? 0 : 1} // Dynamically set decimals
          />
        ) : (
          "0"
        )}
      </motion.div>
      <span className="text-sm text-muted-foreground">{label}</span>
    </motion.div>
  );
};


const StatsDisplay: React.FC = () => {
  return (
    <div className="bg-background p-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatItem label="Clients" value={50} suffix="+" delay={0} />
        <StatItem label="Events" value={200} suffix="+" delay={0.2} />
        <StatItem label="Customer Rating" value={4.9} suffix="/5" delay={0.4} />
        <StatItem label="Years of Experienc" value={5} suffix="+" delay={0.6} />
      </div>
    </div>
  )
}

export default StatsDisplay

