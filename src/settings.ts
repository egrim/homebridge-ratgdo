/* Copyright(C) 2017-2024, HJD (https://github.com/hjdhjd). All rights reserved.
 *
 * settings.ts: Settings and constants for homebridge-ratgdo.
 */

// The platform the plugin creates.
export const PLATFORM_NAME = "Ratgdo";

// The name of our plugin.
export const PLUGIN_NAME = "homebridge-ratgdo";

// The default port to use for our builtin MQTT broker. This is intentionally not the default MQTT port number (1883) in case a user is already running a local broker.
export const RATGDO_API_PORT = 18830;

// Duration, in seconds, of a motion sensor event.
export const RATGDO_MOTION_DURATION = 5;

// How often, in seconds, should we try to reconnect with an MQTT broker, if we have one configured.
export const RATGDO_MQTT_RECONNECT_INTERVAL = 60;

// Default MQTT topic to use when publishing events. This is in the form of: ratgdo/device/event
export const RATGDO_MQTT_TOPIC = "ratgdo";

// Default duration, in seconds, before triggering occupancy on an opener in the open state.
export const RATGDO_OCCUPANCY_DURATION = 300;

// Duration, in seconds, of our door state transition safety timer. This should be long enough that any reasonable state change message from Ratgdo would have had ample
// time to be delivered, but short enough to provide that responsive feeling to an end user.
export const RATGDO_TRANSITION_DURATION = 25;
