<?php   

use craft\elements\Entry;
use craft\helpers\UrlHelper;
use craft\elements\Asset;

    return [
        'endpoints' => [
            'api/portfolio' => function() {
                \Craft::$app->response->headers->set('Access-Control-Allow-Origin', '*');
                return [
                    'elementType' => Entry::class,
                    'criteria' => ['section' => 'portfolio', 'limit' => 10, 'orderBy' => 'postDate desc'],
                    'elementsPerPage' => 10,
                    'transformer' => function(Entry $entry) {
                        return [
                            'title' => $entry->title,
                            'jsonUrl' => UrlHelper::url("portfolio/{$entry->id}.json"),
                        ];
                    },
                ];
            },
            'api/portfolio/<entryId:\d+>.json' => function($entryId) {
                \Craft::$app->response->headers->set('Access-Control-Allow-Origin', '*');
                return [
                    'elementType' => Entry::class,
                    'criteria' => ['id' => $entryId],
                    'one' => true,
                    'transformer' => function(Entry $entry) {
                        return [
                            'title' => $entry->title,
                            'description' => $entry->description,
                            'slug' => $entry->slug,
                            'date' => $entry->postDate,
                        ];
                    },
                ];
            },
            'api/photo.json' => [
                'resourceKey' => 'photo', // the name of the data returned (parent). 'data' is default.
                'elementType' => Asset::class,
                'criteria' => ['volume' => 'images'],
                'transformer' => function(Asset $asset) {
                    return [
                        'slug' => $asset->filename,
                        'url' => $asset->url,
                        'title' => $asset->title,
                        'description' => $asset->description,
                        'alt' => $asset->alt,
                    ];
                },
            ]
        ],
    ];
 
?>