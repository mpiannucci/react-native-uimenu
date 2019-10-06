//
//  ContextMenuViewManager.m
//  reactnativeuimenu
//
//  Created by Matthew Iannucci on 10/6/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "ContextMenuViewManager.h"
#import "ContextMenuView.h"

@implementation ContextMenuViewManager

RCT_EXPORT_MODULE()

- (UIView *) view {
  return [[ContextMenuView alloc] init];
}

@end
