//
//  ContextMenuAction.h
//  reactnativeuimenu
//
//  Created by Matthew Iannucci on 10/6/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTComponent.h>

@interface ContextMenuAction : NSObject

@property (nonatomic, copy) NSString* title;
@property (nonatomic, copy) NSString* systemIcon;
@property (nonatomic, copy) RCTBubblingEventBlock onPress;

@end
