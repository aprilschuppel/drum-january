// Tremor Tracker [v0.1.3]

import React from "react";
import * as HoverCardPrimitives from "@radix-ui/react-hover-card";

import { cx } from "@/src/lib/utils";

interface TrackerBlockProps {
  key?: string | number;
  color?: string;
  tooltip?: string;
  hoverEffect?: boolean;
  defaultBackgroundColor?: string;
}

const Block = ({
  color,
  tooltip,
  defaultBackgroundColor,
  hoverEffect,
}: TrackerBlockProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <HoverCardPrimitives.Root
      open={open}
      onOpenChange={setOpen}
      openDelay={0}
      closeDelay={0}
      tremor-id="tremor-raw"
    >
      <HoverCardPrimitives.Trigger onClick={() => setOpen(true)} asChild>
        <div className="size-full overflow-hidden px-[0.5px] transition first:rounded-l-[4px] first:pl-0 last:rounded-r-[4px] last:pr-0 sm:px-px">
          <div
            className={cx(
              "size-full rounded-[1px]",
              color || defaultBackgroundColor,
              hoverEffect ? "hover:opacity-50" : ""
            )}
          />
        </div>
      </HoverCardPrimitives.Trigger>
      <HoverCardPrimitives.Portal>
        <HoverCardPrimitives.Content
          sideOffset={10}
          side="top"
          align="center"
          avoidCollisions
          className={cx(
            // base
            "w-auto rounded-md px-2 py-1 text-sm shadow-md",
            // text color
            "text-white dark:text-gray-900",
            // background color
            "bg-gray-900 dark:bg-gray-50"
          )}
        >
          {tooltip}
        </HoverCardPrimitives.Content>
      </HoverCardPrimitives.Portal>
    </HoverCardPrimitives.Root>
  );
};

Block.displayName = "Block";

interface TrackerProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TrackerBlockProps[];
  defaultBackgroundColor?: string;
  hoverEffect?: boolean;
}

const Tracker = React.forwardRef<HTMLDivElement, TrackerProps>(
  (
    {
      data = [],
      defaultBackgroundColor = "bg-gray-400 dark:bg-gray-400",
      className,
      hoverEffect,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={cx("group flex h-8 w-full items-center", className)}
        {...props}
      >
        {data.map((props, index) => (
          <Block
            key={props.key ?? index}
            defaultBackgroundColor={defaultBackgroundColor}
            hoverEffect={hoverEffect}
            {...props}
          />
        ))}
      </div>
    );
  }
);

Tracker.displayName = "Tracker";

export { Tracker, type TrackerBlockProps };

// detailed hover block

interface DetailedTrackerBlockProps {
  key?: string | number;
  color?: string;
  tooltip?: string;
  date?: string;
  href?: string;
  description?: string;
  hoverEffect?: boolean;
  defaultBackgroundColor?: string;
}

const DetailedBlock = ({
  color,
  tooltip,
  date,
  description,
  hoverEffect,
  defaultBackgroundColor,
}: DetailedTrackerBlockProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <HoverCardPrimitives.Root
      open={open}
      onOpenChange={setOpen}
      // increase open/closeDelay time to allow mouse hovering over card
      openDelay={0}
      closeDelay={0}
    >
      <HoverCardPrimitives.Trigger onClick={() => setOpen(true)} asChild>
        <div className="size-full overflow-hidden px-[0.5px] transition first:rounded-l-[4px] first:pl-0 last:rounded-r-[4px] last:pr-0 sm:px-px">
          <div
            className={cx(
              "size-full rounded-[1px]",
              color || defaultBackgroundColor,
              hoverEffect ? "hover:opacity-50" : ""
            )}
          />
        </div>
      </HoverCardPrimitives.Trigger>
      <HoverCardPrimitives.Portal>
        <HoverCardPrimitives.Content
          sideOffset={10}
          side="top"
          align="center"
          avoidCollisions
          sticky="always"
          className={cx(
            "group relative min-w-52 max-w-64 rounded-tremor-default shadow-tremor-dropdown dark:shadow-dark-tremor-dropdown",
            " ",
            "bg-white dark:bg-dark-tremor-background",
            "border border-tremor-border dark:border-dark-tremor-border"
          )}
        >
          <div className="flex space-x-2 p-2">
            <div
              className={cx("w-1 shrink-0 rounded", color)}
              aria-hidden={true}
            />
            <div>
              <p className="font-bold text-base">
              {tooltip}
              </p>
                <p className="text-sm">
                  {description}
                </p>
              <p className="mt-1 text-xs">
                {date}
              </p>
            </div>
          </div>
        </HoverCardPrimitives.Content>
      </HoverCardPrimitives.Portal>
    </HoverCardPrimitives.Root>
  );
};

DetailedBlock.displayName = "Detailed Block";

interface DetailedTrackerProps extends React.HTMLAttributes<HTMLDivElement> {
  data: DetailedTrackerBlockProps[];
  defaultBackgroundColor?: string;
  hoverEffect?: boolean;
}

const DetailedTracker = React.forwardRef<HTMLDivElement, DetailedTrackerProps>(
  ({ data = [], className, hoverEffect, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={cx("flex h-10 items-center", className)}
        {...props}
      >
        {data.map((props, index) => (
          <DetailedBlock
            key={props.key ?? index}
            hoverEffect={hoverEffect}
            {...props}
          />
        ))}
      </div>
    );
  }
);

DetailedTracker.displayName = "Detailed Tracker";

export { DetailedTracker, type DetailedTrackerBlockProps };
