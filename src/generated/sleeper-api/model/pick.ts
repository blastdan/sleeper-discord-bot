/**
 * Sleeper API
 * The Sleeper API is a read-only HTTP API that is free to use and allows             access to a users leagues, drafts, and rosters. No API Token is necessary, as you cannot modify contents via this API. Be mindful of the frequency of calls. A general rule is to stay under 1000 API calls per minute, otherwise, you risk being IP-blocked.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PickMetadata } from './pickMetadata';


export interface Pick { 
    player_id: string;
    /**
     * user_id this pick will go to (not all leagues have users in every slot, this can be \"\"
     */
    picked_by: string;
    /**
     * roster_id this pick will go to
     */
    roster_id: string;
    round: number;
    /**
     * which column this is on the draftboard
     */
    draft_slot: number;
    pick_no: number;
    metadata: PickMetadata;
    is_keeper: boolean | null;
    draft_id: string;
}

